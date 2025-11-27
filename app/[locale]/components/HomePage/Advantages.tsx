import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
const Advantages = () => {
  const locale = useLocale();
  const t = useTranslations("Index.Advantages");
  return (
    <section className="bg-[#f7f7f7] dark:bg-slate-600 pb-8">
      <div className="mx-auto px-[0.9375rem]">
        <div className="pt-16 pb-4 px-[0.9375rem] text-center m-auto">
          <h3 className="font-bold text-2xl text-[#3a3a3a] dark:text-[#f7f7f7] mb-5 mt-4">
            {t("advantages")}
          </h3>
        </div>
      </div>
      <div className="mx-auto px-[0.9375rem] sm:flex">
        <div className="mr-[0.9375rem]">
          <div className="px-[0.9375rem] w-28 mt-0 mb-8 mx-auto">
            <Image
              src="/img/img13.png"
              width={200}
              height={100}
              alt="CREATIVE IDEAS"
              className=" w-full"
              priority
            />
          </div>
          <div
            className={`pl-0 leading-snug ${
              locale == "ar" ? "text-right" : "text-left"
            }`}
          >
            <h4 className="m-0 text-xl uppercase text-[#66ab36] pb-1">
              {t("Creative")}
            </h4>
            <p className="mb-4 text-[#989797] dark:text-[#f7f7f7]">
              {t("Serving")}
            </p>
          </div>
        </div>
        <div className="mr-[0.9375rem]">
          <div className="px-[0.9375rem] w-28 mt-0 mb-8 mx-auto">
            <Image
              src="/img/img15.png"
              width={200}
              height={100}
              alt="DECORATING"
              className=" w-full"
              priority
            />
          </div>
          <div
            className={`pl-0 leading-snug ${
              locale == "ar" ? "text-right" : "text-left"
            }`}
          >
            <h4 className="m-0 text-xl uppercase text-[#66ab36] pb-1">
              {t("DECORATING")}
            </h4>
            <p className="mb-4 text-[#989797] dark:text-[#f7f7f7]">
              {t("time")}
            </p>
          </div>
        </div>
        <div className="mr-[0.9375rem]">
          <div className="px-[0.9375rem] w-28 mt-0 mb-8 mx-auto">
            <Image
              src="/img/img17.png"
              width={200}
              height={100}
              alt="GARDEN DESIGN"
              className=" w-full"
              priority
            />
          </div>
          <div
            className={`pl-0 leading-snug ${
              locale == "ar" ? "text-right" : "text-left"
            }`}
          >
            <h4 className="m-0 text-xl uppercase text-[#66ab36] pb-1">
              {t("DESIGN")}
            </h4>
            <p className="mb-4 text-[#989797] dark:text-[#f7f7f7]">
              {t("exterior")}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto px-[0.9375rem] sm:flex">
        <div className="mr-[0.9375rem]">
          <div className="px-[0.9375rem] w-28 mt-0 mb-8 mx-auto">
            <Image
              src="/img/img14.png"
              width={200}
              height={100}
              alt="Expert advice"
              className=" w-full"
              priority
            />
          </div>
          <div
            className={`pl-0 leading-snug ${
              locale == "ar" ? "text-right" : "text-left"
            }`}
          >
            <h4 className="m-0 text-xl uppercase text-[#66ab36] pb-1">
              {t("advice")}
            </h4>
            <p className="mb-4 text-[#989797] dark:text-[#f7f7f7]">
              {t("Regardless")}
            </p>
          </div>
        </div>
        <div className="mr-[0.9375rem]">
          <div className="px-[0.9375rem] w-28 mt-0 mb-8 mx-auto">
            <Image
              src="/img/img16.png"
              width={200}
              height={100}
              alt="Friendly Prices"
              className=" w-full"
              priority
            />
          </div>
          <div
            className={`pl-0 leading-snug ${
              locale == "ar" ? "text-right" : "text-left"
            }`}
          >
            <h4 className="m-0 text-xl uppercase text-[#66ab36] pb-1">
              {t("Friendly")}
            </h4>
            <p className="mb-4 text-[#989797] dark:text-[#f7f7f7]">
              {t("offer")}
            </p>
          </div>
        </div>
        <div className="mr-[0.9375rem]">
          <div className="px-[0.9375rem] w-28 mt-0 mb-8 mx-auto">
            <Image
              src="/img/img18.png"
              width={200}
              height={100}
              alt="SOFT SCAPES"
              className=" w-full"
              priority
            />
          </div>
          <div
            className={`pl-0 leading-snug ${
              locale == "ar" ? "text-right" : "text-left"
            }`}
          >
            <h4 className="m-0 text-xl uppercase text-[#66ab36] pb-1">
              {t("SCAPES")}
            </h4>
            <p className="mb-4 text-[#989797] dark:text-[#f7f7f7]">
              {t("scaping")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Advantages;
