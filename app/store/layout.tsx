

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="absolute max-w-screen flex">
        <main className="w-screen">{children}</main>
      </div>
    </>
  );
} 