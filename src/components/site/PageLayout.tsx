import {Header} from "@/components/site/Header";
import {Footer} from "@/components/site/Footer";

export function PageLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
