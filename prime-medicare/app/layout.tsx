import "./globals.css";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-var",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-var",
  weight: ["400", "500", "600"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${inter.variable} font-jakarta`}>
        <div className="max-w-[1443px] mx-auto bg-white">{children}</div>
      </body>
    </html>
  );
}