import type {Locale} from "@/lib/i18n";
import {HomeView} from "@/components/home-view";

export function HomePageSections({locale}: {locale: Locale}) {
  return <HomeView locale={locale} />;
}

export function HomePage({locale}: {locale: Locale}) {
  return <HomePageSections locale={locale} />;
}

export default HomePageSections;
