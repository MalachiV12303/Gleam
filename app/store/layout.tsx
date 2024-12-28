

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div id="storeLayoutDiv" className="relative flex">
      <main id="storeLayoutMain" className="w-screen pb-5 md:pb-8 pt-10 md:pt-16 max-h-[100dvh] overflow-hidden">{children}</main>
    </div>
  );
} 