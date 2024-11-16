

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="absolute w-screen flex">
        <main>{children}</main>
      </div>
    </>
  );
} 