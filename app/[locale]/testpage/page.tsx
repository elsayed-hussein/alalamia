import { useTranslations, useLocale } from "next-intl";
import DarkModeBtn from "../components/UI/DarkModeBtn";
import TestComponent from "./components/test";
import LocalBtn from "../components/UI/LocalBtn";


const TestPage = () => {
  const locale = useLocale();
  const t = useTranslations("Index");
  return (
    <div>
      <TestComponent />
      Test
      <DarkModeBtn />
      <div className="bg-white dark:bg-gray-800">
        <h1 className="text-gray-900 dark:text-white">Dark mode</h1>
        <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
      </div>
      <LocalBtn />
      <h1
        className={`${
          locale == "ar"
            ? "font-semibold text-gray-600"
            : "font-semibold text-black"
        }`}
      >
        {t("title")}
      </h1>

    </div>
  );
};

export default TestPage;
