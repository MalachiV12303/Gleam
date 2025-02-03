
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main id="storeLayoutMain" className="w-full mx-auto flex flex-col flex-1">
      {children}
    </main>
  );
} 