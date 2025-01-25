import IndexLink from "../ui/indexlink";
import SearchBar from "../ui/searchbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div id="storeLayoutDiv" className="relative flex">
      <div className='z-20 sm:gap-8 text-4xl fixed top-4 px-8 flex flex-col sm:flex-row sm:items-center w-full'>
        <IndexLink/>
        <SearchBar className="text-base flex-1 sm:max-w-[40dvw] lg:max-w-[45dvw] xl:max-w-[55dvw] 2xl:max-w-[60dvw] "/>
      </div>
      <main id="storeLayoutMain" className="w-screen overflow-x-hidden max-h-[100dvh] h-[100dvh]">{children}</main>
    </div>
  );
} 