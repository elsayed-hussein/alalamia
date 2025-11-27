import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const WhyVV = () => {
  const locale = useLocale();
  const t = useTranslations("Index.whyvv");
  return (
    <section className="py-16 min-h-max text-[#3a3a3a] dark:text-white sm:relative px-[2%]">
      <div
        className={`absolute w-full sm:h-[702px] sm:bg-fixed sm:bg-[top_center] sm:bg-cover sm:bg-no-repeat sm:bottom-0 sm:left-0 sm:-z-10 ${
          locale == "ar"
            ? "sm:bg-[url('/img/img10l.png')]"
            : "sm:bg-[url('/img/img10.png')]"
        }`}
      ></div>
      <div className="container flex h-full my-4  mx-[2%]">
        <div className="hidden sm:block sm:w-1/2  w-full"></div>
        <div className="max-w-[75%] sm:w-1/2  ">
          <h3 className=" text-2xl font-bold dark:text-[#66ab36]">
            {t("Why")}
          </h3>
          <h5 className="mt-1 mb-4 text-xl font-normal">{t("WELCOME")}</h5>
          <p
            className={`mb-8  tracking-[0.34px] max-w-[75%] ${
              locale == "ar" ? "text-right" : "text-left"
            }`}
          >
            {t("After")}
          </p>
          <Link
            href="/about"
            className="md:mt-[50px] my-[15px] border-2 border-[#66ab36] text-[#66ab36] px-8 py-4 text-xs sm:text-[1.25rem] rounded-full hover:bg-[#66ab36] hover:text-white font-normal"
          >
            {t("FIND")}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default WhyVV;
