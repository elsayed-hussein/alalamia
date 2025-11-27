import Link from "next/link";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("Index.hero");
  return (
    <section className="bg-[url('/img/img1.jpg')] text-white bg-cover bg-center px-[6%] py-4 bg-no-repeat min-h-[50vw] w-full ">
      <div className="pt-[8.6%] pb-[10%]  sm:max-w-[55%] w-full  flex flex-col justify-between items-center text-center m-auto sm:w-auto">
        <h1 className="font-[400] leading-none text-[28px] sm:text-[56px] my-[15px] w-full">
          <span className="block font-[700]">{t("PLANT")}</span>
          <span className="block font-[700]">{t("passion")}</span>
        </h1>
        <h3 className="leading-tight mt-[15px] sm:mt-[50px] mb-[15px] font-[400] text-[20px]">
          {t("WHENEVER")}
        </h3>
        <Link
          href="/about"
          className="sm:mt-[50px] mt-[15px] border border-white px-8 py-4 text-[0.75rem] sm:text-[1.5rem] rounded-full hover:bg-[#66ab36]"
        >
          {t("MORE")}
        </Link>
      </div>
    </section>
  );
};
export default HeroSection;
