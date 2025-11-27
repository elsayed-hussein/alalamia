import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const Create = () => {
  const locale = useLocale();
  const t = useTranslations("Index.Create");
  return (
    <section className="bg-[url('/img/img11.jpg')] w-full bg-center bg-cover bg-no-repeat">
      <div className="py-[100px] px-[15vw] sm:px-[50px] lg:py-[142px] lg:px-[0] text-white text-left sm:max-w-[720px] mx-auto  ">
        <div className="pb-0 mb-6 max-w-[600px]">
          <h2 className="text-[28px] my-4 font-bold">
            <span
              className={`text-[#f0bc00] ${
                locale == "ar" ? " text-5xl ml-10 " : ""
              }`}
            >
              {t("CREATE")}
            </span>
            <br />
            <span className="text-white">{t("Perfect")}</span>
          </h2>
        </div>
        <Link
          href="/about"
          className="sm:mt-[50px] my-[15px] bg-[#66ab36] text-white px-8 py-4 text-xs sm:text-[1.25rem] rounded-full hover:bg-[#3a3a3a] font-normal"
        >
          {t("MORE")}
        </Link>
      </div>
    </section>
  );
};
export default Create;
