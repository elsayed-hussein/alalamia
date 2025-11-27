export const metadata = {
  title: "Vermi Valley About",
  description: "Vermi Valley Organic fertilizer",
  keywords: "Vermi Valley,Organic fertilizer,Organic, fertilizer",
  authors: [
    { name: "elsayed hussein", url: "https://elsayed-portfolio.web.app" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
