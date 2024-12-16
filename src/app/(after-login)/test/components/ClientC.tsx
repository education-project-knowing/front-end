'use client';
import { use, useEffect, useLayoutEffect, useState, useTransition } from 'react';

const getSessionBrowser = () => sessionStorage.getItem('sessionId');

const delay = () => {
  return new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('업데이트된 텍스트');
    }, 2000);
  });
};

export default function ClientC() {
  const sessionId = use(delay());
  //   const [sessionId, setSessionId] = useState<null | string>(null);

  return (
    <div>
      <h1>홈 페이지</h1>
      <div>
        <p>현재 세션 ID: {sessionId}</p>
      </div>
    </div>
  );
}
function generateSessionId() {
  // 간단한 세션 ID 생성 함수 (실제 사용시 더 복잡한 로직 권장)
  return Math.random().toString(36).substring(2, 15);
}
