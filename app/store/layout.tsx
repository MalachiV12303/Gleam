
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="top-0 absolute w-full h-screen flex">
        {children}
      </div>
    </>
  );
} 