import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ShoppingCartProvider } from "@/context";
import CheckoutSideMenu from "@/components/CheckoutSideMenu";
import Footer from "@/components/Footer";
import { AuthProvider } from "../hooks/useAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "E-commerce made with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <html lang="en">
          <body className={inter.className}>
            <Navbar />
            {/* <Suspense fallback={<Loading />}> */}
            <main className="flex flex-col justify-center items-center pt-20">{children}</main>
            {/* </Suspense> */}
            <CheckoutSideMenu />
            <Footer />
          </body>
        </html>
      </ShoppingCartProvider>
    </AuthProvider>
  );
}
