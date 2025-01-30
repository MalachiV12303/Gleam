import './globals.css'
import NavBar from './ui/navbar'
import { inc } from './ui/fonts'
import { Providers } from './providers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "gleam",
  description: "mock videography market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //global font size, not sure if tailwind is the best way to apply this
    <html suppressHydrationWarning lang="en" className={`${inc.className} overflow-x-hidden snap-y snap-mandatory no-scrollbar text-[16px] md:text-[18px] lg:text-[22px] scroll-smooth`}>
      <body className={`relative antialiased text-foreground`}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
