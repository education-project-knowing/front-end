'use client';
import { UserService } from '@/service/api';
import { use } from 'react';

// const fetchFnc = async () => {
//     return await UserService.postPublicUsers();
// //   return new Promise<string>(resolve => setTimeout(() => resolve('업데이트된 텍스트'), 2000));
// };

export default function ClientComp({ promise, text }: { promise: Promise<any>; text: string }) {
  const sessionId = use(promise);

  return (
    <div>
      클라이언트 컴포넌트입니다:
      {/* <pre>{JSON.stringify(sessionId, null, 2)}</pre> */}
      <pre>{text}</pre>
    </div>
  );
}
// 'use client';

// import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
// import { use } from 'react';

// export default function ClientC() {
//   const { data } = useSuspenseQuery({
//     queryKey: ['someData'],
//     queryFn: () => new Promise<string>(resolve => setTimeout(() => resolve('업데이트된 텍스트'), 2000)),
//   });
//   //   const [sessionId, setSessionId] = useState<null | string>(null);

//   return (
//     <div>
//       <h1>홈 페이지</h1>
//       <div>
//         <p>현재 세션 ID: {data}</p>
//       </div>
//     </div>
//   );
// }
