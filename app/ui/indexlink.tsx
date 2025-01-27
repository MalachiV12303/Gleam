import Link from "next/link";
import { cinzel } from "@/app/ui/fonts"

export default function IndexLink(){
    return (
        <Link href='/' className={`${cinzel.className} z-20 select-none tracking-widest text-4xl`}>
            <span>GLEAM</span>
        </Link>
    )
}