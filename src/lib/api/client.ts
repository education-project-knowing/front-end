import ky, { AfterResponseHook, BeforeErrorHook, BeforeRequestHook, Options as KyOptions, NormalizedOptions } from 'ky';
import { ApiConfig, KyInterceptor } from './types';

export class ApiClient {
  private instance: typeof ky;
  private beforeRequestHooks: BeforeRequestHook[] = [];
  private afterResponseHooks: AfterResponseHook[] = [];
  private beforeErrorHooks: BeforeErrorHook[] = [];

  constructor(config: ApiConfig) {
    const { baseURL, timeout = 10000, retries = 2 } = config;

    this.instance = ky.create({
      prefixUrl: baseURL,
      timeout,
      retry: retries,
      hooks: {
        beforeRequest: [
          async (request, option) => {
            // 등록된 모든 beforeRequest 훅을 순차적으로 실행
            for (const hook of this.beforeRequestHooks) {
              await hook(request, option);
            }
          },
        ],
        afterResponse: [
          async (request, options, response) => {
            // 등록된 모든 afterResponse 훅을 순차적으로 실행
            for (const hook of this.afterResponseHooks) {
              await hook(request, options, response);
            }
            return response;
          },
        ],
        beforeError: [
          async error => {
            // 등록된 모든 beforeError 훅을 순차적으로 실행
            for (const hook of this.beforeErrorHooks) {
              error = await hook(error);
            }
            return error;
          },
        ],
      },
    });
  }

  use(interceptor: KyInterceptor) {
    if ('onRequest' in interceptor && interceptor.beforeRequest) {
      this.beforeRequestHooks.push(interceptor.beforeRequest);
    }
    if ('onResponse' in interceptor && interceptor.afterResponse) {
      this.afterResponseHooks.push(interceptor.afterResponse);
    }
    if ('onError' in interceptor && interceptor.beforeError) {
      this.beforeErrorHooks.push(interceptor.beforeError);
    }
    return this;
  }

  async request<T>(endpoint: string, options?: KyOptions): Promise<T> {
    return await this.instance(endpoint, options).json<T>();
  }

  async get<T>(endpoint: string, options?: KyOptions): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'get' });
  }

  async post<T>(endpoint: string, data?: unknown, options?: KyOptions): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'post',
      json: data,
    });
  }
}
