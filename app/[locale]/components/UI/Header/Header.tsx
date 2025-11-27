import TopNav from "./TopNav";
import MainNav from "./MainNav";
import BottomNav from "./BottomNav";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("nav");
  return (
    <header className="drop-shadow-xl z-50">
      <TopNav />
      <nav className="flex items-center content-around sm:block ">
        <MainNav />
        <BottomNav
          home={t("home")}
          services={t("services")}
          about={t("about")}
          contact={t("contact")}
        />
      </nav>
    </header>
  );
}
