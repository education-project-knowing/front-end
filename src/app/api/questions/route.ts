import { NextRequest, NextResponse } from 'next/server';
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '10';

  return NextResponse.json([
    { title: `${page}, ${limit} 하이` },
    { title: '객체지향이란 무엇인가', isChecked: true, rate: 1 },
    { title: '함수형 프로그래밍의 장점', isChecked: false, rate: 2 },
    { title: 'JavaScript ES6 주요 특징', isChecked: true, rate: 3 },
    { title: 'React Hooks 사용법', isChecked: false, rate: 2 },
    { title: 'TypeScript 기초 문법', isChecked: true, rate: 1 },
    { title: 'Node.js 비동기 프로그래밍', isChecked: false, rate: 3 },
    { title: 'RESTful API 설계 원칙', isChecked: true, rate: 2 },
    { title: 'GraphQL vs REST', isChecked: false, rate: 1 },
    { title: 'Docker 컨테이너 기초', isChecked: true, rate: 3 },
    { title: 'CI/CD 파이프라인 구축', isChecked: false, rate: 2 },
    { title: '머신러닝 기초 개념', isChecked: true, rate: 1 },
    { title: '블록체인 기술 이해하기', isChecked: false, rate: 3 },
    { title: '클라우드 컴퓨팅 서비스 비교', isChecked: true, rate: 2 },
    { title: '데이터베이스 정규화', isChecked: false, rate: 1 },
    { title: '네트워크 프로토콜의 이해', isChecked: true, rate: 3 },
    { title: '웹 보안 기초', isChecked: false, rate: 2 },
    { title: '아고리즘 복잡도 분석', isChecked: true, rate: 1 },
    { title: '디자인 패턴 활용법', isChecked: false, rate: 3 },
    { title: '애자일 개발 방법론', isChecked: true, rate: 2 },
    { title: '버전 관리 시스템 Git 사용법', isChecked: false, rate: 1 },
    { title: '웹 접근성 가이드라인', isChecked: true, rate: 3 },
    { title: '크로스 브라우저 호환성', isChecked: false, rate: 2 },
    { title: '반응형 웹 디자인 기법', isChecked: true, rate: 1 },
    { title: 'SVG 애니메이션 구현', isChecked: false, rate: 3 },
    { title: 'WebGL 3D 그래픽스', isChecked: true, rate: 2 },
    { title: '프로그레시브 웹 앱(PWA) 개발', isChecked: false, rate: 1 },
    { title: '서버리스 아키텍처의 이해', isChecked: true, rate: 3 },
    { title: '마이크로서비스 아키텍처', isChecked: false, rate: 2 },
    { title: '빅데이터 처리 기술', isChecked: true, rate: 1 },
    { title: 'IoT 플랫폼 개발', isChecked: false, rate: 3 },
  ]);
}
