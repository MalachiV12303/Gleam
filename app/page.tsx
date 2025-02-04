import LogoAnimation from './ui/logoanimation'

export default function Home() {
  return (
    <>
      {/* <div className='fixed flex w-screen h-full justify-center'><div className='h-full w-[1px] bg-white'></div></div> */}
      <div className='pixelate fixed w-screen h-[100dvh]'>
        <LogoAnimation />
      </div>
      <main className={`pointer-events-auto h-[100dvh] w-full flex flex-col items-center lowercase text-xl tracking-widest`}>
        <div className='pointer-events-none w-full h-[45dvh] sm:h-[30dvh] flex items-center justify-center'>
          <p>mock videography market</p>
        </div>
        <div className='pointer-events-none mt-auto w-full h-[45dvh] sm:h-[30dvh] flex flex-col items-center justify-center'>
          <p>by malachi valle</p>
        </div>
      </main>
    </>
  )
}
