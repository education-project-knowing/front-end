import { KyInterceptor } from '@/lib/api/types';

export const loggingInterceptor: KyInterceptor = {
  beforeRequest: (request, options) => {
    console.log(`🚀 [${request.method}] ${request.url}, ${JSON.stringify(options)} huwawa`);
    return request;
  },
  afterResponse: (request, options, response) => {
    console.log(`✨ [${response.status}] ${response.url}`);
    return response;
  },
  beforeError: error => {
    console.error('❌ API Error:', error);
    return error;
  },
};
