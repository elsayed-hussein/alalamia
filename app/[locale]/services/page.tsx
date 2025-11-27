import Link from "next/link";
import PageTitle from "../components/UI/PageTitle";
import { useTranslations } from "next-intl";

const ServicesPage = () => {
  const t = useTranslations("services");
  return (
    <section className="">
      <PageTitle pageTitle={t("PageTitle")} />
      <div
        className="sm:bg-[url('/img/img27-1410x487.jpg')] bg-[url('/img/img27.jpg')] text-[#3d3d3d] dark:text-[#d3d3d3] relative text-center md:text-left bg-cover bg-no-repeat pb-0 before:content-['']   before:bg-gradient-to-r md:before:from-[rgba(255,255,255,0.8)]  md:before:via-[rgba(255,255,255,0.8)] before:from-[rgba(255,255,255,0.8)] before:to-[rgba(255,255,255,0.8)] md:before:to-[rgba(255,255,255,0.02)] 
      md:before:dark:from-[rgba(0,0,0,0.8)]  md:before:dark:via-[rgba(0,0,0,0.8)] before:dark:from-[rgba(0,0,0,0.8)] before:dark:to-[rgba(0,0,0,0.8)] md:before:dark:to-[rgba(0,0,0,0.02)]
        before:absolute before:top-0 before:right-0 before:bottom-0 before:w-full before:h-full before:left-0  "
      >
        <div className="mx-auto px-4 md:ml-0  md:px-8 relative w-full pt-[60px] pb-20 md:w-1/2">
          <h2 className="mb-8 text-[#66ab36] font-bold text-3xl mt-4">
            {t("VermiTea")}
          </h2>
          <p className="break-words mb-10 text-xl">{t("biofertilizer")}</p>
          <Link
            href="/contact"
            className="sm:mt-[50px] my-[15px] bg-[#66ab36] text-white px-8 py-4 text-xs sm:text-[1.25rem] rounded-full hover:bg-[#3a3a3a] font-normal"
          >
            {t("ORDER")}
          </Link>
        </div>
      </div>
      <div
        className="sm:bg-[url('/img/img28-1410x487.jpg')] bg-[url('/img/img28.jpg')] text-[#3d3d3d] dark:text-[#d3d3d3] relative text-center md:text-right bg-cover bg-no-repeat pb-0 before:content-['']   before:bg-gradient-to-l md:before:from-[rgba(255,255,255,0.8)]  md:before:via-[rgba(255,255,255,0.8)] before:from-[rgba(255,255,255,0.8)] before:to-[rgba(255,255,255,0.8)] md:before:to-[rgba(255,255,255,0.02)] 
      md:before:dark:from-[rgba(0,0,0,0.8)]  md:before:dark:via-[rgba(0,0,0,0.8)] before:dark:from-[rgba(0,0,0,0.8)] before:dark:to-[rgba(0,0,0,0.8)] md:before:dark:to-[rgba(0,0,0,0.02)]
        before:absolute before:top-0 before:right-0 before:bottom-0 before:w-full before:h-full before:left-0 border-y-[#66ab36] py-28 border-y-8 "
      >
        <div className="mx-auto px-4 md:mr-0  md:px-8 relative w-full pt-[60px] pb-20 md:w-1/2">
          <h2 className="mb-8 text-[#66ab36] font-bold text-3xl mt-4">
            {t("EM1")}
          </h2>
          <p className="break-words mb-10 text-xl">{t("nurtured")}</p>
          <Link
            href="/contact"
            className="sm:mt-[50px] my-[15px] bg-[#66ab36] text-white px-8 py-4 text-xs sm:text-[1.25rem] rounded-full hover:bg-[#3a3a3a] font-normal"
          >
            {t("ORDER")}
          </Link>
        </div>
      </div>
      <div
        className="sm:bg-[url('/img/img29-1410x487.jpg')] bg-[url('/img/img29.jpg')] text-[#3d3d3d] dark:text-[#d3d3d3] relative text-center md:text-left bg-cover bg-no-repeat pb-0 before:content-['']   before:bg-gradient-to-r md:before:from-[rgba(255,255,255,0.8)]  md:before:via-[rgba(255,255,255,0.8)] before:from-[rgba(255,255,255,0.8)] before:to-[rgba(255,255,255,0.8)] md:before:to-[rgba(255,255,255,0.02)] 
      md:before:dark:from-[rgba(0,0,0,0.8)]  md:before:dark:via-[rgba(0,0,0,0.8)] before:dark:from-[rgba(0,0,0,0.8)] before:dark:to-[rgba(0,0,0,0.8)] md:before:dark:to-[rgba(0,0,0,0.02)]
        before:absolute before:top-0 before:right-0 before:bottom-0 before:w-full before:h-full before:left-0  "
      >
        <div className="mx-auto px-4 md:ml-0  md:px-10 relative w-full pt-[60px] pb-20 md:w-1/2">
          <h2 className="mb-8 text-[#66ab36] font-bold text-3xl mt-4">
            {t("compost")}
          </h2>
          <p className="break-words mb-10 text-xl">{t("fertilizer")}</p>
          <Link
            href="/contact"
            className="sm:mt-[50px] my-[15px] bg-[#66ab36] text-white px-8 py-4 text-xs sm:text-[1.25rem] rounded-full hover:bg-[#3a3a3a] font-normal"
          >
            {t("ORDER")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
