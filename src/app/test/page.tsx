import Link from 'next/link';
import { trace } from '@opentelemetry/api';
import { Span } from '@opentelemetry/api';
import { UserService } from '@/service/api';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Test Page',
    description: 'This is a test page with a dynamic Open Graph image',
    openGraph: {
      title: 'Test Page',
      description: 'Description for the test page',
      url: 'https://front-end-two-rose.vercel.app/test',
      images: 'https://9926-223-222-247-87.ngrok-free.app/test/opengraph-image',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Test Page',
      description: 'Description for the test page',
      images: 'https://9926-223-222-247-87.ngrok-free.app/test/opengraph-image',
    },
  };
}

const delay = async () => {
  return await new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('업데이트된 텍스트');
    }, 2000);
  });
};

// const fetchFnc = async (): Promise<any[]> => {
//   // return await UserService.postPublicUsers();
//   return await new Promise<any>(resolve => {
//     setTimeout(async () => {
//       resolve(await UserService.postPublicUsers());
//     }, 2000);
//   });
// };

// 메인페이지 퀴즈 카드
export default async function Card() {
  const twFlexRow = 'flex flex-row text-nowrap';
  const promise = delay();

  // const cats = await UserService.getPublicUsers();
  // const postCat = await UserService.postPublicUsers();
  // console.log('Cats fetched:', cats);
  return (
    <article className="flex h-full flex-col items-center gap-5 rounded-2xl bg-[#738660] px-5 py-9">
      <div className="flex h-fit w-full flex-col items-start rounded-2xl bg-[#c1cab5] px-10 py-10">
        {/* title */}
        <Link href="/questions">
          <h4 className="text-nowrap text-2xl font-bold">데이터 베이스</h4>
        </Link>
        <p className="text-xs text-gray-700">데이터를 효율적으로 저장 어쩌구저쩌구</p>
        {/* content */}
        <div className="flex w-full flex-row flex-wrap justify-between">
          <div>
            <div className={twFlexRow}>
              <p>문제수</p>
              <p>10/50</p>
            </div>
            <div className={twFlexRow}>
              <p>엄준식</p>
              <p>10/50</p>
            </div>
          </div>
          {/* 학습시간 section */}
          <div>
            <p>학습시간!!</p>
            <p>01 : 12 : 04</p>
          </div>
        </div>
      </div>

      <div className="flex h-full w-full flex-row justify-between gap-2">
        <button className="h-full w-fit text-nowrap bg-[#e0bd6b] px-3 py-2">퀴즈 범위</button>
        <button className="h-full w-full bg-[#e0bd6b]">공부하기</button>
      </div>
      {/* <Suspense fallback={<div>loading...</div>}>
        <ClientComp
          promise={fetchFnc()}
          text={JSON.stringify(cats)}
        />
      </Suspense> */}
    </article>
  );
}
