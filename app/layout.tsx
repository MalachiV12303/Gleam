import './globals.css';

import type { Metadata } from "next";
import { raleway } from "./ui/fonts"
import NavBar from "./ui/navbar"
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "sylus",
  description: "Mock Ecommerce Website create with Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //global font size, not sure if tailwind is the best way to apply this
    
    <html lang="en" className='text-[22px]'>
        <body className={`${raleway.className} antialiased text-foreground bg-background`}>
          <Providers>
            <NavBar />
              {children}
          </Providers>
        </body>
    </html>
  );
}
