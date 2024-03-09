import type { Metadata } from "next";
import { Roboto, Oswald } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ 
  subsets: ["cyrillic"],
  weight: ['300', '400', '500', '700'],
  variable: "--font-roboto"
});

const oswald = Oswald({
  subsets: ['cyrillic'],
  weight: ['500', '600', '700'],
  variable: "--font-oswald"
})

export const metadata: Metadata = {
  title: "GamingZone",
  description: "Продажа видеоигр",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${oswald.variable} w-full`}>
        <div className="__next">
          {/* Header */}
          <main className="main w-full" id="main">
            <div className="w-full" id="mainPage">
              {children}
            </div>
          </main>
          {/* Footer */}
        </div>
      </body>
    </html>
  );
}
