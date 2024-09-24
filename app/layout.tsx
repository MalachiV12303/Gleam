import '@/app/ui/global.css';
import type { Metadata } from "next";
import { raleway } from "./ui/fonts"
import NavBar from "./ui/navbar"

export const metadata: Metadata = {
  title: "Ecommerce Videography",
  description: "Mock Ecommerce Website create with Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
