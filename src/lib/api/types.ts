import { AfterResponseHook, BeforeErrorHook, BeforeRequestHook } from 'ky';

export interface ApiConfig {
  baseURL: string;
  timeout?: number;
  retries?: number;
}

export interface KyInterceptor {
  beforeRequest?: BeforeRequestHook;
  afterResponse?: AfterResponseHook;
  beforeError?: BeforeErrorHook;
}
