import Footer from "../components/footer";
import Header from "../components/header";
import '../styles/globals.css';

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "motion digital room",
  description: "yoga pilates respiracion flexibilidad movilidad deporte fuerza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body
      >
        <Header/>
        {children}
        <Footer/>

      </body>
    </html>
  );
}
