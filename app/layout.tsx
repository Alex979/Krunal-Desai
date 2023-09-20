import "./globals.css";
import { Baskervville } from "next/font/google";
import Script from "next/script";

const baskervville = Baskervville({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Krunal Desai - Wildlife Photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-stone-200 ${baskervville.className}`}>{children}</body>
    </html>
  );
}
