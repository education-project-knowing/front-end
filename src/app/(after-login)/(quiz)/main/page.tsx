import { Suspense } from 'react';

export default async function Page() {
  console.log('hihi');
  return (
    <div className="main-card-container grid w-full grid-cols-1 gap-x-5 gap-y-28 lg:grid-cols-3">
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Card />
      </Suspense>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
}
