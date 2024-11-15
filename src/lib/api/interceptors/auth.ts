import { KyInterceptor } from '@/lib/api/types';

export const authInterceptor: KyInterceptor = {
  beforeRequest: async request => {
    const token = 'await getAuthToken()';
    if (token) {
      request.headers.set('Authorization', `Bearer ${token}`);
    }
  },
};
