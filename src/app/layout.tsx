import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Pricing Component",
  description: "Creating Pricing Component with Toggle FrontendMentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="bg-image px-6">{children}</body>
    </html>
  );
}
