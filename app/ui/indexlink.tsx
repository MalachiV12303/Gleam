import Link from "next/link";
import { cinzel } from "@/app/ui/fonts"

export default function IndexLink(){
    return (
        <Link href='/' className={`${cinzel.className} select-none tracking-widest text-3xl`}>
            <span>GLEAM</span>
        </Link>
    )
}