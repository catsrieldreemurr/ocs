import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunitoFont = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catsriel's OCs",
  description: "Come one, come all. Witness the unraveling of my mind that is my OC characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={nunitoFont.className}
      >
        {children}
      </body>
    </html>
  );
}
