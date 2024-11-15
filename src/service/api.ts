import { api, authApi } from '@/lib/api/instances';

interface User {
  id: number;
  name: string;
  email: string;
}

interface CreateUserDTO {
  name: string;
  email: string;
}

export class UserService {
  // 공개 API
  static async getPublicUsers() {
    return api.get<User[]>('cats');
  }

  static async postPublicUsers() {
    return api.post<User[]>('cats', {}, { cache: 'no-store' });
  }

  // 인증 필요 API
  static async getCurrentUser() {
    return authApi.get<User>('me');
  }

  static async createUser(data: CreateUserDTO) {
    return authApi.post<User>('users', data);
  }
}
