"use client";

import { useEffect } from "react";

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center my-4">
      <h2 className="text-4xl font-bold mb-4">{error.message}</h2>
      <button
        className="sm:mt-[50px] mt-[15px] border border-[#66ab36] px-8 py-4 text-[0.75rem] sm:text-[1.5rem] rounded-full hover:bg-[#66ab36] hover:text-white"
        onClick={() => reset()}
      >
        Try again حاول مره أخري
      </button>
    </div>
  );
};
export default GlobalError;
