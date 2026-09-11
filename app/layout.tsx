import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PPGoshaSans = localFont({
  src: [
    {
      path: "./fonts/PPGoshaSans-Bold.otf",
      weight: "600",
      style: "normal"
    },
    {
      path: "./fonts/PPGoshaSans-Regular.otf",
      weight: "400",
      style: "normal"
    },
  ]
})

export const metadata: Metadata = {
  title: "TaskNest | Home Projects Done Quickly",
  description: "Get connected with cleaners, gardeners, landscapers, and renovators in your area to help you complete your home project quickly.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${PPGoshaSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
