import { ApiClient } from '@/lib/api/client';
import { authInterceptor } from '@/lib/api/interceptors/auth';
import { loggingInterceptor } from '@/lib/api/interceptors/base';
import { string, z } from 'zod';

// 환경 변수 스키마 정의
// const envSchema = z.object({
//   API_BASE_URL: z.string().url(),
// });

// const env = envSchema.parse(process.env);

export const createApiClient = () => {
  const isServer = typeof window === 'undefined';
  const baseURL = isServer ? (process.env.API_BASE_URL as string) : '/api';

  const client = new ApiClient({ baseURL });

  // 기본 인터셉터 추가
  client.use(loggingInterceptor);

  return client;
};

// API 인스턴스 생성
export const api = createApiClient();
export const authApi = createApiClient().use(authInterceptor);
