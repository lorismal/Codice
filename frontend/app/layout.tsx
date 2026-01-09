import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LetsGrow! - Piattaforma Revenue Sharing",
  description: "Investimenti intelligenti per PMI italiane.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full">
      <body className={`${inter.className} antialiased bg-gray-50 flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-900 text-white mt-auto py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <span className="text-2xl font-bold text-blue-400">LetsGrow!</span>
                <p className="mt-2 text-gray-400 text-sm">Investimenti intelligenti per PMI.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-16 sm:grid-cols-3">
                <div>
                  <h3 className="uppercase text-gray-500 font-bold text-xs tracking-wider mb-4">Esplora</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>Blog</li>
                    <li>Chi Siamo</li>
                  </ul>
                </div>
                <div>
                  <h3 className="uppercase text-gray-500 font-bold text-xs tracking-wider mb-4">Legale</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>Privacy</li>
                    <li>Termini</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
