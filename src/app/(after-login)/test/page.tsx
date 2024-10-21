import { LocalIcon } from '@/asset/icon';
import Link from 'next/link';

// 메인페이지 퀴즈 카드
export default async function Card() {
  const twFlexRow = 'flex flex-row text-nowrap';
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
    </article>
  );
}
