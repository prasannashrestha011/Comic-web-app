import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideBarProvider } from "./components/context/SideBarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Read Comics online for free",
  description: "Created by Prasanna Shrestha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cup-cake">
      <body className={inter.className} >
        <SideBarProvider>
        {children}
        </SideBarProvider>
        </body>
    </html>
  );
}
