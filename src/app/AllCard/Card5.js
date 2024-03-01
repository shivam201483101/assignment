"use Client";
import React from "react";
import Image from "next/image";
import download from "./download.png";

const Card5 = () => {
  return (
    <div className="py-4 px-2">
      <div className="flex flex-col px-5 max-w-[292px]">
        <Image
          src={download}
          alt=""
          className="self-center max-w-full aspect-[1.37] w-[141px]"
        />
        <div className="flex gap-5 justify-between mt-16 text-sky-800">
          <div className="text-sm bg-gray-100 text-gray-500 leading-5 whitespace-nowrap">
            <span className="bg-gray-100 text-gray-500">20% Off</span>
          </div>
          <div className="flex-auto  text-sm leading-5">
            <span className="bg-gray-100 text-gray-500">Limited time </span>
          </div>
        </div>
        <div className="self-center mt-5 text-base font-bold leading-6 text-gray-500 whitespace-nowrap">
          Webbuilder 1
        </div>
        <div className="mt-5 w-full text-base leading-6 text-gray-500">
          Computer Modern clasic with wix support
        </div>
        <div className="flex gap-2.5 justify-between mt-3.5">
          <div className="grow text-xl leading-7 text-gray-500">$39.96</div>
          <div className="text-sm leading-5 text-gray-400">$49.96</div>
          <div className="flex-auto text-sm leading-5 text-rose-500">
            (20% Off)
          </div>
        </div>
        <div className="mt-4 w-full justify-center items-center px-16 py-3 text-base leading-6 text-center text-white bg-blue-500 rounded-xl max-md:px-5 max-md:mt-1 min-h-[48px]">
          View Deal
        </div>
      </div>
    </div>
  );
};

export default Card5;
