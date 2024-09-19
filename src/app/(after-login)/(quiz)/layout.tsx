export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen w-full">
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}
