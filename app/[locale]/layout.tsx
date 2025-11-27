import { useLocale } from "next-intl";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import React from "react";
import WhatsappBtn from "./components/UI/WhatsappBtn";
import BackToTopBtn from "./components/UI/BackToTopBtn";
import Providers from "./Providers";

type Locale = {
  locale: string;
};

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Vermi Valley",
  description: "Vermi Valley Organic fertilizer",
  keywords: "Vermi Valley,Organic fertilizer,Organic, fertilizer",
  authors: [
    { name: "elsayed hussein", url: "https://elsayed-portfolio.web.app" },
  ],
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Locale;
}) {
  const locale = useLocale();
  return (
    <html
      lang={locale}
      dir={`${locale == "ar" ? "rtl" : " ltr"}`}
      className={`${roboto.className} light`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-screen h-full flex flex-col dark:bg-[#2a2a2a]">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <div className="fixed bottom-3 right-3 ">
            <WhatsappBtn />
            <BackToTopBtn />
          </div>
        </Providers>
      </body>
    </html>
  );
}
