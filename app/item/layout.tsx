import { motion } from "motion/react";
import { raleway } from "@/app/ui/fonts"
import FiltersPanel from "../ui/store/filters/filters-panel";

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${raleway.className} flex min-h-[100dvh]`}>
      <main className="w-10/12 mx-auto relative">
      <div className='fixed bottom-0'>
        <FiltersPanel itemtype='cam' type={'mobile'}/>
      </div>
      {children}
      </main>
    </div>
  )
} 