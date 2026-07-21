import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import AIChat from "@/components/AIChat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OLABU",
  description: "OLABU is a bangladeshi customized PVC wallboard business with the best quality possible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col px-10 md:px-30">
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
        <AIChat />
      </body>
    </html>
  );
}
