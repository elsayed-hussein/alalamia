import PageTitle from "../components/UI/PageTitle";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const AboutPage = () => {
  const locale = useLocale();
  const t = useTranslations("aboutPage");
  return (
    <section className="">
      <PageTitle pageTitle={t("PageTitle")} />
      <div
        className={`text-[#3d3d3d] dark:text-[#d3d3d3] relative text-center  bg-cover bg-no-repeat pb-0 before:content-['']  md:before:from-[rgba(255,255,255,0.8)]  md:before:via-[rgba(255,255,255,0.8)] before:from-[rgba(255,255,255,0.8)] before:to-[rgba(255,255,255,0.8)] md:before:to-[rgba(255,255,255,0.02)]
      md:before:dark:from-[rgba(0,0,0,0.8)]  md:before:dark:via-[rgba(0,0,0,0.8)] before:dark:from-[rgba(0,0,0,0.8)] before:dark:to-[rgba(0,0,0,0.8)] md:before:dark:to-[rgba(0,0,0,0.02)]
        before:absolute before:top-0 before:right-0 before:bottom-0 before:w-full before:h-full before:left-0 ${
          locale == "ar"
            ? "bg-[url('/img/about-img-l.png')] md:text-right md:pr-8 before:bg-gradient-to-l"
            : "bg-[url('/img/about-img.png')] md:text-left md:pl-8 before:bg-gradient-to-r"
        }`}
      >
        <div
          className={`mx-auto px-4 md:px-8 relative w-full pt-[60px] pb-20 md:w-1/2 ${
            locale == "ar" ? "md:mr-0" : "md:ml-0"
          }`}
        >
          <h2 className="mb-8 text-[#66ab36] font-bold text-3xl mt-4">
            {t("aboutTitle")}
          </h2>
          <p className="break-words mb-10 text-xl">{t("aboutText")}</p>
          <h2 className="mb-8 text-[#66ab36] font-bold text-3xl mt-4">
            {t("ourGoals")}
          </h2>
          <p className="break-words mb-10 text-lg">
            <ul>
              <li>
                <span className="text-[#66ab36] font-extrabold text-3xl mx-2">
                  -
                </span>
                {t("Goal1")}
              </li>
              <li>
                <span className="text-[#66ab36] font-extrabold text-3xl mx-2">
                  -
                </span>
                {t("Goal2")}
              </li>
              <li>
                <span className="text-[#66ab36] font-extrabold text-3xl mx-2">
                  -
                </span>
                {t("Goal3")}
              </li>
              <li>
                <span className="text-[#66ab36] font-extrabold text-3xl mx-2">
                  -
                </span>
                {t("Goal4")}
              </li>
              <li>
                <span className="text-[#66ab36] font-extrabold text-3xl mx-2">
                  -
                </span>
                {t("Goal5")}
              </li>
              <li>
                <span className="text-[#66ab36] font-extrabold text-3xl mx-2">
                  -
                </span>
                {t("Goal6")}
              </li>
            </ul>
          </p>
          <Link
            href="/contact"
            className="sm:mt-[50px] my-[15px] bg-[#66ab36] text-white px-8 py-4 text-xs sm:text-[1.25rem] rounded-full hover:bg-[#3a3a3a] font-normal"
          >
            {t("aboutBTN")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
