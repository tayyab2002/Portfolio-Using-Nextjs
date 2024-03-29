import type { Metadata } from "next";
import "./globals.css";
import Navber from "@/components/Navber";


export const metadata: Metadata = {
  title: "Tayyab Khattak || Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navber/>
        {children}
        </body>
    </html>
  );
}
