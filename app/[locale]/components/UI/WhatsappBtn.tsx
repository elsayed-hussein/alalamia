import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappBtn = () => {
  return (
    <div className="bg-[#66ab36] border-2 border-white hover:border-[#3a3a3a] p-2 mb-2 rounded-full">
      <Link
        href={"https://api.whatsapp.com/send?phone=12033092445"}
        className="hover:text-[#3a3a3a]  text-white text-center  w-full h-full  text-2xl ease-in-out duration-300 bg-transparent"
        target="_blank"
        title="+1(203)309-2445"
      >
        <FaWhatsapp />
      </Link>
    </div>
  );
};
export default WhatsappBtn;
