import "./globals.css";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "25 Jahre Karawane",
  description:
    "Eine Seite zur Würdigung und Bewahrung der Erfahrungen aus 25 Jahren Kämpfe um die Rechte von Flüchtlingen und Migranten.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-[2vw] scroll-smooth bg-amber-200 lg:h-screen">
        {children}
      </body>
      {/* <body className={inter.className}>{children}</body> */}
    </html>
  );
}
