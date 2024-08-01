import { useEffect } from 'react';

// 브라우저 닫기와 뒤로가기 이벤트를 막습니다.
export function usePreventNavigation() {
  useEffect(() => {
    const handleWindowClose = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault();
      window.dispatchEvent(new Event('beforeunload'));
    };

    window.addEventListener('beforeunload', handleWindowClose);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
}
