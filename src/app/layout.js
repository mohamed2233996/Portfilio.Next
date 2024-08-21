import { Poppins } from "next/font/google";
import "./globals.css";
import Aos from "aos";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '800', '900']
});

export const metadata = {
  title: "Mohamed Gamal - Portfilio",
  description: "A personal portfolio showcasing my skills and experiences.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
