import type { Metadata } from "next";
import Header from "../components/ui/storeUi/header";
import Footer from "../components/ui/storeUi/footer";

export const metadata: Metadata = {
  title: "Al Alamia Store",
  description: "The Best Store for all your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
