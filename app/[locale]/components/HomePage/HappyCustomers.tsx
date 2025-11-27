import { useLocale, useTranslations } from "next-intl";

const HappyCustomers = () => {
  const locale = useLocale();
  const t = useTranslations("Index.Happy");
  return (
    <section className="bg-[#333333] py-8 text-white">
      <div className="px-[0.9375rem] mx-auto">
        <div className="m-auto text-center">
          <h3 className="text-white tracking-wide font-bold text-2xl leading-[1.1]  mt-4 mb-5">
            {t("happy")}
          </h3>
        </div>
      </div>
      <div className="px-[0.9375rem] leading-snug mx-auto sm:flex">
        <div className=" px-[0.9375rem] mb-4">
          <div
            className={`before:content-['❞'] before:text-8xl before:text-[#66ab36] before:leading-none  pt-6 pl-4 mt-4  ${
              locale == "ar" ? "text-right" : "text-left"
            }`}
          >
            <p className="text-white -mt-6 mb-4">{t("garden")}</p>
            <strong className="text-[#66ab36] font-light text-[0.875rem] mt-3">
              {t("Hankers")}
            </strong>
          </div>
        </div>
        <div className="px-[0.9375rem] mb-4">
          <div
            className={`before:content-['❞'] before:text-8xl before:text-[#66ab36] before:leading-none  pt-6 pl-4 mt-4  ${
              locale == "ar" ? "text-right" : "text-left"
            }`}
          >
            <p className="text-white -mt-6 mb-4">{t("Seeing")}</p>
            <strong className="text-[#66ab36] font-light text-[0.875rem] mt-3">
              {t("Bond")}
            </strong>
          </div>
        </div>
        <div className="px-[0.9375rem] mb-4">
          <div
            className={`before:content-['❞'] before:text-8xl before:text-[#66ab36] before:leading-none  pt-6 pl-4 mt-4  ${
              locale == "ar" ? "text-right" : "text-left"
            }`}
          >
            <p className="text-white -mt-6 mb-4">{t("professional")}</p>
            <strong className="text-[#66ab36] font-light text-[0.875rem] mt-3">
              {t("Mary")}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HappyCustomers;
