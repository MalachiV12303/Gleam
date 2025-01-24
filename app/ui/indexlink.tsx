import Link from "next/link";
import { cinzel } from "@/app/ui/fonts"

export default function IndexLink(){
    return (
        <Link href='/' className={`${cinzel.className} tracking-widest text-4xl fixed top-4 left-8`}>
            GLEAM
        </Link>
    )
}