import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { UserTimelineProvider } from "@/context/TimelineContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keen Keeper",
  description: "A modern Next.js application for tracking and visualizing social interactions with friends. Monitor calls, texts, videos, and engagement metrics with beautiful charts and timelines.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="light"
      className={`${geistSans.className} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col bg-[#F8FAFC]">
        <header>
          <NavBar></NavBar>
        </header>

        <UserTimelineProvider>
          {children}
        </UserTimelineProvider>

        <footer>
          <Footer />
        </footer>

        <ToastContainer
        position="top-center" />
      </body>
    </html>
  );
}
