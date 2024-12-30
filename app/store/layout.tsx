export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div id="storeLayoutDiv" className="relative flex">
      <main id="storeLayoutMain" className="w-screen max-h-[100dvh] overflow-auto">{children}</main>
    </div>
  );
} 