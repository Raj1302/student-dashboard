import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Student Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full relative">
          <div className="max-md:hidden h-screen ml-[1.5vw] mt-[2.5vh] flex w-80 flex-col fixed inset-y-0">
            <Sidebar />
          </div>
          <main className="md:pl-96 mt-[2.5vh] mr-[1.5vw] pb-10">
            <Navbar/>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
