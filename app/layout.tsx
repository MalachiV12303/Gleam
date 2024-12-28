import './globals.css'
import NavBar from './ui/navbar'
import { inc } from './ui/fonts'
import { Providers } from './providers'
import { PageBorder } from '@/app/ui/animations'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "captare.memorias",
  description: "mock videography ecommerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //global font size, not sure if tailwind is the best way to apply this
    <html suppressHydrationWarning lang="en" className='text-[16px] md:text-[22px] 2xl:text-[26px] scroll-smooth'>
      <body className={`${inc.className} relative antialiased text-foreground bg-background `}>
        <Providers>
          <NavBar />
          <PageBorder />
          {children}
        </Providers>
      </body>
    </html>
  )
}
