import Link from "next/link";
import PageTitle from "../components/UI/PageTitle";
import { useTranslations, useLocale } from "next-intl";

const ContactPage = () => {
  const locale = useLocale();
  const t = useTranslations("contactPage");
  return (
    <section>
      <PageTitle pageTitle={t("PageTitle")} />
      <h3
        className={`text-3xl font-bold w-full text-center p-4 ${
          locale == "ar" ? "tracking-widest" : ""
        }`}
      >
        {t("help")}
      </h3>
      <div className="md:flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1449.6807376705187!2d30.573741461640505!3d25.23929332057496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14476156b679e6af%3A0x233b3b653f1c2a17!2z2LTYsdmD2Kkg2YHZitix2YXZiiDZgdin2YTZiiDZhNil2YbYqtin2Kwg2KfZhNmB2YrYsdmF2Yog2YPZiNmF2KjZiNiz2Ko!5e1!3m2!1sar!2seg!4v1695733529662!5m2!1sar!2seg"
          width="600"
          height="450"
          loading="lazy"
          className="w-full px-[5%] md:w-1/2 md:p-3 mx-auto"
        ></iframe>
        <div className="md:w-1/2 m-auto text-center ">
          <div className="border-b-4 border-[#66ab36] pb-2">
            <h3 className="py-2 px-2 text-[#66ab36]  font-semibold">
              {t("Telephone")}
            </h3>
            <a href="tel:+201282111101">01282111101</a>
            <span className="mx-1">-</span>
            <a href="tel:+201000373540">01000373540</a>
          </div>
          <div className="border-b-4 border-[#66ab36] pb-2">
            <h3 className="py-2 px-2 text-[#66ab36]  font-semibold">
              {t("whatsapp")}
            </h3>
            <Link href={"https://api.whatsapp.com/send?phone=12033092445"}>
              +1(203)309-2445
            </Link>
          </div>
          <div className="border-b-4 border-[#66ab36] pb-2">
            <h3 className="py-2 px-2 text-[#66ab36]  font-semibold">
              {t("email")}
            </h3>
            <a href="mailto:vermivalley.eg@gmail.com">
              vermivalley.eg@gmail.com
            </a>
          </div>
          <div className="border-b-4 border-[#66ab36] pb-2">
            <h3 className="py-2 px-2 text-[#66ab36]  font-semibold">
              {t("FaceBook")}
            </h3>
            <a href="https://www.facebook.com/profile.php?id=100086201989870">
              Vermi Valley
            </a>
          </div>
          <div className="border-b-4 border-[#66ab36] pb-2">
            <h3 className="py-2 px-2 text-[#66ab36]  font-semibold">
              {t("youtube")}
            </h3>
            <a href="https://www.youtube.com/@vermivalley">@vermivalley</a>
          </div>
          <div className="border-b-4 border-[#66ab36] pb-2">
            <h3 className="py-2 px-2 text-[#66ab36]  font-semibold">
              {t("instagram")}
            </h3>
            <a href="https://www.instagram.com/vermivalley.eg/">
              vermivalley.eg
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
