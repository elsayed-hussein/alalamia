import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaGithub,
  FaPinterest,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="mt-2 bg-[#222222] mx-auto text-white text-center py-6 w-full"
      dir="ltr"
    >
      <div className="ease-in-out duration-300 my-4 ">
        <Link
          href="/"
          className="inline-flex w-fit drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]"
        >
          <Image
            src="/img/main.png"
            width={200}
            height={100}
            alt="home"
            className="mx-auto mb-4 max-w-[35vw] w-full "
            priority
          />
        </Link>
      </div>
      <div className="text-right ease-in-out duration-300 inline-block leading-none">
        <ul className="p-0  m-0 list-none text-right leading-none inline-block w-auto ease-in-out duration-300  ">
          <li className="m-0 mr-4 inline-block align-top ">
            <Link
              href={"#"}
              className="hover:text-[#66ab36] text-white block text-center text-2xl ease-in-out duration-300 bg-transparent"
            >
              <FaFacebookF />
            </Link>
          </li>
          <li className="m-0 mr-4 inline-block align-top ">
            <Link
              href={"#"}
              className="hover:text-[#66ab36] text-white block text-center text-2xl ease-in-out duration-300 bg-transparent"
            >
              <FaTwitter />
            </Link>
          </li>
          <li className="m-0 mr-4 inline-block align-top ">
            <Link
              href={"#"}
              className="hover:text-[#66ab36] text-white block text-center text-2xl ease-in-out duration-300 bg-transparent"
            >
              <FaPinterest />
            </Link>
          </li>
          <li className="m-0 mr-4 inline-block align-top ">
            <Link
              href={"#"}
              className="hover:text-[#66ab36] text-white block text-center text-2xl ease-in-out duration-300 bg-transparent"
            >
              <FaYoutube />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex mt-4 items-center justify-center">
        <p>Elsayed-Hussein © 2023 ·</p>
        <Link
          href={"https://github.com/elsayed-hussein"}
          className="hover:text-[#66ab36] ml-2 text-white block text-center text-2xl ease-in-out duration-300 bg-transparent"
        >
          <FaGithub />
        </Link>
        <Link
          href={"https://api.whatsapp.com/send?phone=201113484674"}
          className="hover:text-[#66ab36] ml-2 text-white block text-center text-2xl ease-in-out duration-300 bg-transparent"
        >
          <FaWhatsapp />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
