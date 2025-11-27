"use client";

import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
const BackToTopBtn = () => {
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`bg-[#66ab36] border-2 border-white hover:border-[#3a3a3a] hover:pb-1 rounded-full  ${
        isHidden ? "hidden" : "hidden sm:block"
      }`}
      onClick={scrollUp}
    >
      <div className="hover:text-[#3a3a3a]  text-white text-center w-full h-full p-2 text-2xl ease-in-out duration-300 bg-transparent">
        <FaAngleDoubleUp />
      </div>
    </div>
  );
};
export default BackToTopBtn;
