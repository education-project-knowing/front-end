import Navigation from '@/components/navigations/Navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navigation />
      {children}
    </div>
  );
}
