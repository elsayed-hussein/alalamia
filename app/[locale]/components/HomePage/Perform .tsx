import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Perform = () => {
  const locale = useLocale();
  const t = useTranslations("Index.Perform");
  return (
    <section
      className={`pt-[112px] pb-[80px]  bg-cover bg-center bg-no-repeat ${
        locale == "ar"
          ? "bg-[url('/img/img12l.png')]"
          : "bg-[url('/img/img12.png')]"
      }`}
    >
      <div className="sm:max-w-[720px] mx-auto px-4">
        <div className="pt-3 flex flex-wrap flex-col -mx-4 px-4  text-[#3a3a3a] max-w-[75%] sm:max-w-[50%]">
          <div
            className={`mb-6  break-words ${
              locale == "ar" ? "text-right " : "text-left"
            }`}
          >
            <h3 className="font-bold text-2xl text-[#3a3a3a] dark:text-[#66ab36] mb-5 mt-4">
              {t("perform")}
              <br />
              {t("Highest")}
            </h3>
            <p className="pb-0 mb-4 text-[#989797] dark:text-white">
              {t("garden")}
            </p>
          </div>
          <Link
            href="/services"
            className=" border-2 border-[#dadada] uppercase rounded-[30px] px-8 py-4 w-fit font-semibold text-[#3a3a3a] text-lg hover:bg-[#66ab36] hover:text-white dark:text-white "
          >
            {t("quote")}
          </Link>
        </div>
        <div className="hidden sm:block sm:w-1/2  w-full"></div>
      </div>
    </section>
  );
};
export default Perform;
