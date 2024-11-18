import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Educk",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-claro relative`}
      >
        <div className={`bg-claro`}>
		      <Header />
		        {children}
		      <Footer />
	      </div>
      </body>
    </html>
  );
}
