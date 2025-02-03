import ButtonBackground from "../ui/pagebackground";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main id="storeLayoutMain" className="w-full mx-auto flex flex-col flex-1">
        {children}
        <div className="fixed -z-30 right-0 bottom-0 w-full h-full">
          <ButtonBackground />
        </div>
      </main>
    </>
  );
} 