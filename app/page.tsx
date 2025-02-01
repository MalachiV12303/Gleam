import LogoAnimation from './ui/logoanimation'

export default function Home() {
  return (
    <>
      {/* <div className='fixed flex w-screen h-full justify-center'><div className='h-full w-[1px] bg-white'></div></div> */}
      <div className='pixelate fixed w-screen h-[100dvh]'>
        <LogoAnimation />
      </div>
      <main className={`h-[100dvh] w-full flex flex-col items-centerlowercase text-xl tracking-widest`}>
        <div className='h-[30dvh] flex items-center justify-center'>
          <p>mock videography market</p>
        </div>
        <div className='z-40 flex-1 w-1/4 '></div>
        <div className="w-full h-[30dvh] flex flex-col items-center justify-center">
          <p>by malachi valle</p>
        </div>
      </main>
    </>
  )
}
