import IndexLink from "../ui/indexlink";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div id="storeLayoutDiv" className="relative flex">
      <IndexLink></IndexLink>
      <main id="storeLayoutMain" className="w-screen overflow-x-hidden max-h-[100dvh] h-[100dvh] overflow-auto">{children}</main>
    </div>
  );
} 