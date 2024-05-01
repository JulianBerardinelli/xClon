import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "X Clon ",
  description: "by Julian Berardinelli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-h-[100vh]">{children}</body>
    </html>
  );
}
