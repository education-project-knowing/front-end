export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}
