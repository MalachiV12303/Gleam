import './globals.css';
import { bnova } from "@/app/ui/fonts"

export default function Home() {
  return ( 
      <div className="top-0 absolute w-full flex flex-col justify-center">
        <main>
          <div className={`${bnova.className} flex min-h-[100dvh]`}>
            <div className="text-5xl my-auto mx-auto">
              <span className="wavy float-left origin-center rotate-180">s</span>
              <span className="wavy float-left origin-center">y</span>
              <span className="wavy float-left origin-center rotate-180">l</span>
              <span className="wavy float-left origin-center">u</span>
              <span className="wavy float-left origin-center rotate-180">s</span>
              </div>
          </div>
        </main>
      </div>
  );
}
