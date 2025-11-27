import { useTranslations } from "next-intl";
import {
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";
import DarkModeBtn from "../DarkModeBtn";
import LocalBtn from "../LocalBtn";

const TopNav = () => {
  const t = useTranslations("nav");
  return (
    <nav className="flex px-0 bg-[#66ab36] py-[3px] text-left dark:bg-gray-800">
      <div className="flex justify-between items-center mx-auto max-w-[1440px]  w-full px-[0.9375rem]">
        <div className="block text-[9px] sm:text-[0.875rem] font-light">
          <div className="mt-0 mr-[0.75em] sm:mr-[1.5em] text-white flex items-center justify-center text-[9px]  sm:text-sm">
            <span className="hidden sm:block">{t("callUs")}</span>
            <span className="sm:hidden block mr-1">
              <FaPhoneAlt />
            </span>
            <Link
              className="ease-in-out duration-300 hover:text-[#3a3a3a]"
              href="tel:+201282111101"
            >
              01282111101
            </Link>
            <Link
              href={"https://api.whatsapp.com/send?phone=12033092445"}
              className=" ml-2 hover:text-[#3a3a3a] text-white text-center text-[9px] sm:text-[0.875rem] ease-in-out duration-300 bg-transparent flex items-center justify-center"
              target="_blank"
              title="+1(203)309-2445"
            >
              <FaWhatsapp />
              <span className="ml-1 d-none">+1(203)309-2445</span>
            </Link>
          </div>
        </div>
        <LocalBtn />
        <div className="flex max-w-[200px] justify-end items-center relative gap-3">
          <div className="text-right ease-in-out duration-300 inline-block leading-none">
            <ul className="p-0 m-0 list-none text-right leading-none inline-block w-auto ease-in-out duration-300  ">
              <li className="m-0 mr-[10px] inline-block align-top ">
                <Link
                  href={"#"}
                  className="hover:text-[#3a3a3a] text-white block text-center text-[0.875rem] ease-in-out duration-300 bg-transparent"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li className="m-0 mr-[10px] inline-block align-top ">
                <Link
                  href={"#"}
                  className="hover:text-[#3a3a3a] text-white block text-center text-[0.875rem] ease-in-out duration-300 bg-transparent"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li className="m-0 mr-[10px] inline-block align-top ">
                <Link
                  href={"#"}
                  className="hover:text-[#3a3a3a] text-white block text-center text-[0.875rem] ease-in-out duration-300 bg-transparent"
                >
                  <FaPinterest />
                </Link>
              </li>
              <li className="m-0 mr-[10px] inline-block align-top ">
                <Link
                  href={"#"}
                  className="hover:text-[#3a3a3a] text-white block text-center text-[0.875rem] ease-in-out duration-300 bg-transparent"
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
          <DarkModeBtn />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
