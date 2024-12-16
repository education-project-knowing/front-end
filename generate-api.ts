// 1. 먼저, swagger-typescript-api를 설치합니다:
// npm install -D swagger-typescript-api

// 2. 프로젝트 루트에 generate-api.js 파일을 생성합니다:
const { generateApi } = require('swagger-typescript-api');
const path = require('path');

generateApi({
  name: 'api.ts',
  output: path.resolve(process.cwd(), './src/api'),
  url: 'http://your-backend-url/api-json', // NestJS Swagger JSON URL
  httpClientType: 'ky',
}).then(({ files, configuration }: { files: any; configuration: any }) => {
  console.log('API 생성 완료');
});

// 3. package.json에 스크립트를 추가합니다:
// "scripts": {
//   "generate-api": "node generate-api.js"
// }
