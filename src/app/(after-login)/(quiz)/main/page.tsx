import Card from '@/app/(after-login)/test/page';

export default async function Page() {
  return (
    <div className="main-card-container grid w-full grid-cols-1 gap-x-5 gap-y-28 lg:grid-cols-3">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
