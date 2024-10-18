import "./globals.css";
import { Lato } from "next/font/google";
import Header from "@/app/_components/Header";
export const metadata = {
  title: {
    template: "%s | Readers-One",
    default: "Welcome to Readers-One",
  },
  description:
    "Readers-One provides you hundreds of amazing blogs on different topics to make reading your habbit",
};

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-gray-50`}>
        <Header />
        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}
