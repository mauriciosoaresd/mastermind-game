import "./globals.css";
import { Inter } from "next/font/google";
import { ReduxProvider } from "./redux/provider";
import Navbar from "../components/NavBar/NavBar";
import LayoutSVG from "@/components/LayoutSVG/LayoutSVG";
import Footer from "@/components/Footer/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-auto scroll-smooth">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <ReduxProvider>
        <body className={`${inter.className} bg-purple text-white flex min-h-screen flex-col items-center pb-2`}>
            <Navbar />
            {children}
            <Footer />
          <LayoutSVG />
        </body>
      </ReduxProvider>
    </html>
  );
}
