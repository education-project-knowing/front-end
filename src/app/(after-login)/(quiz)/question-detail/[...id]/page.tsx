import RatingRadio from '@/app/(after-login)/(quiz)/question-detail/_components/RatingRadio';

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  return (
    <div>
      <h1>My Post: {params.slug}</h1>
      {/* title */}
      <div className="mb-3 rounded-lg bg-[#738660] px-5 pb-7">
        <h4 className="p-3 text-2xl font-bold text-[#ded29a]">Question</h4>
        <div className="min-h-40 rounded-lg bg-[#ded29a] p-3">
          <p>객체지향이란 무엇인가요?</p>
        </div>
      </div>

      {/* rating */}
      <div className="mb-10 flex items-center justify-end">
        <p className="mr-5 hidden md:block">별점: </p>
        <RatingRadio />
      </div>

      {/* Answer */}
      <div className="rounded-lg bg-[#738660] px-5 pb-7">
        <h4 className="p-3 text-2xl font-bold text-[#ded29a]">Answer</h4>
        <div className="min-h-96 rounded-lg bg-[#ded29a] p-3 py-10">
          <p>
            객체 지향 프로그래밍(Object-Oriented Programming, OOP)은 소프트웨어 설계 방법 중 하나로, 프로그램을 여러
            개의 독립된 단위인 객체(object)로 나누어 설계하는 방식입니다. 객체는 데이터(속성)와 이를 처리하는
            코드(메서드)를 함께 포함하며, 이를 통해 코드의 재사용성과 유지보수성을 높입니다.
          </p>
        </div>
      </div>
    </div>
  );
}
