import styles from "@/app/ui/animations.module.css"
import { bnova } from "@/app/ui/fonts"

export default function Home() {
  return (
    <div className="top-0 absolute w-full"> {/* absolute is for navbar */}
      <main>
        <div className={`${bnova.className} flex flex-col max-h-[100dvh] overflow-y-scroll scrollbar select-none lowercase`}>
          <div className="min-h-[100dvh] mx-auto text-sm flex flex-col items-center justify-center">
            <p className={`${styles.wavy} text-foreground/90`}><span className="text-danger">Mock</span> Videography Ecommerce Platform</p>
            <p className="tracking-wider text-[2rem] sm:text-[3rem] lg:text-[4rem]">captare.memorias</p>
            <p className="mt-20 text-foreground/90">: Malachi Valle</p>
          </div>
          <div className="text-sm sm:text-base mb-20 mx-auto italic flex flex-col items-center text-foreground/90">
            <p>using next.js 14 with Tailwind and Typescript</p>
            <p>accessing a Vercel database with drizzle orm</p>
          </div>
        </div>
      </main>
    </div>
  );
}
