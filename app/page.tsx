import { cinzel } from "@/app/ui/fonts"
import * as motion from "motion/react-client"

export default function Home() {

  return (
      <main className={`w-full lowercase select-none`}>
          <div className="fixed min-h-[100dvh] min-w-[100dvw] text-sm flex items-center justify-center">
            <div className='flex flex-col items-center'>
              <p className={`text-foreground/90`}><span className="text-danger">Mock</span> Videography Market</p>
              <p className={`${cinzel.className} tracking-widest text-[2rem] sm:text-[3rem] lg:text-[4rem]`}>gleam</p>
              <p className="mt-8 text-foreground/90">: Malachi Valle</p>
            </div>
          </div>
          <div className="snap-start min-h-[100dvh]"></div>
          <motion.div className="snap-center min-h-[40dvh] text-sm sm:text-base mx-auto italic flex flex-col items-center justify-center text-foreground"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring' , delay: 0.5, duration: 0.75 }}
            >
            <p>using Next.js, Tailwind and Typescript</p>
            <p>accessing a Vercel database with drizzle orm</p>
          </motion.div>
      </main>
  );
}
