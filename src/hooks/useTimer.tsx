import { useCallback, useEffect, useRef, useState } from 'react';

const useTimer = (initialTime: number) => {
  const [time, setTime] = useState<number | undefined>(undefined);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    // 이미 실행 중인 타이머가 있다면 초기화
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setTime(initialTime);
    intervalRef.current = setInterval(() => {
      setTime(prevTime => {
        if (prevTime === undefined || prevTime <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          return undefined;
        }
        return prevTime - 1;
      });
    }, 1000);
  }, [initialTime]);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTime(undefined);
  }, []);

  useEffect(() => {
    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => {
      stopTimer();
    };
  }, [stopTimer]);

  return { time, startTimer, stopTimer };
};
export default useTimer;
