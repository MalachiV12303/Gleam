

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="absolute w-dvw flex">
        <main>{children}</main>
      </div>
    </>
  );
} 