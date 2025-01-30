import LogoAnimation from './ui/logoanimation';

export default function Home() {
  return (
    <>
      {/* <div className='fixed flex w-screen h-full justify-center'><div className='h-full w-[1px] bg-white'></div></div> */}
      <div className='pixelate fixed w-screen h-[100dvh]'><LogoAnimation /></div>
      <main className={`w-full lowercase select-none pointer-events-none`}>
        <div className="fixed top-0 w-full min-h-[25dvh] text-sm sm:text-base italic flex items-center justify-center">
          <p>mock videography market</p>
        </div>
        
        <div className="fixed bottom-0 w-full min-h-[25dvh] text-sm sm:text-base italic flex flex-col items-center justify-center">
          <p>by Malachi Valle</p>
          <p>using Vercel</p>
        </div>
      </main>
    </>
  );
}
