

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div id="storeLayoutDiv" className="relative flex">
      <main id="storeLayoutMain" className="w-screen">{children}</main>
    </div>
  );
} 