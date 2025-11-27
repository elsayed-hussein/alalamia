import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4 p-6">
        <Image
          src="/img/main.png"
          width={400}
          height={200}
          alt="home"
          className="mx-auto mb-4 max-w-[25vw] w-full"
          priority
        />
      </div>
    </div>
  );
};

export default loading;
