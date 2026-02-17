import {Header} from "@/components/site/Header";
import {Footer} from "@/components/site/Footer";
import {getServerLang} from "@/lib/i18n/lang";

export function PageLayout({children}: {children: React.ReactNode}) {
  const lang = getServerLang();

  return (
    <div className="page">
      <Header lang={lang} />
      {children}
      <Footer lang={lang} />
    </div>
  );
}
