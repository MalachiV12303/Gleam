
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main id="storeLayoutMain" className="w-screen overflow-x-hidden">
      {children}
    </main>
  );
} 