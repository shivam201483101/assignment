"use Client";
import React from "react";
import Image from "next/image";
import download from "./download.png";
import srcimg from "./cup.png";

const Card = () => {
  return (
    <>
      <div className="flex flex-col pt-4 pl-1.5">
        <div className="pr-6 pb-3 mt-4 bg-white rounded-xl max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[23%] relative max-md:ml-0 max-md:w-full">
              <div className=" flex flex-row gap-0 bg-orange-500 absolute h-10 rounded-md w-38 text-left p-2 -left-4 -top-4">
                <Image className="w-15 h-15" src={srcimg} alt="" />
                <h1 className="text-base font-bold font-mono text-slate-100 h-auto">
                  &nbsp;Best Seller
                </h1>
              </div>
              <div className="flex flex-col items-center pl-12 mt-14 max-md:pl-5 max-md:mt-10">
                <Image
                  src={download}
                  className="aspect-[1.37] w-[141px]"
                  alt=""
                />
                <div className="mt-4">Builder 1</div>
              </div>
              <div className="rounded-full border-2 border-black-600 text-gray-400 p-2 w-11 absolute text-center top-10 left-0">
                1
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[52%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-7 text-base leading-6 text-gray-600 max-md:mt-10 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <span className="font-bold">
                    WixPro 72-Inch Responsive Website Builder
                  </span>
                  - Comprehensive Digital Platform Creation Tool, Streamlined
                  Design Interface for Professional Websites and Online Stores
                  (Black/Blue)
                </div>
                <div className="mt-3.5 font-bold leading-[150%] text-slate-700 max-md:max-w-full">
                  Main highlights
                </div>
                <div className="self-start mt-5 ml-5 max-md:max-w-full">
                  [What You Get]: Receive the WixPro website builder suite,
                  access to premium design templates, an extensive library of
                  widgets and apps, and detailed step-by-step guides.
                </div>
                <div className="mt-8 flex flex-row items-center text-blue-500 leading-[150%] hover:underline max-md:max-w-full">
                  <span>Show more</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.98043 5.64645C4.17569 5.45118 4.49228 5.45118 4.68754 5.64645L8.33398 9.29289L11.9804 5.64645C12.1757 5.45118 12.4923 5.45118 12.6875 5.64645C12.8828 5.84171 12.8828 6.15829 12.6875 6.35355L8.68754 10.3536C8.49228 10.5488 8.17569 10.5488 7.98043 10.3536L3.98043 6.35355C3.78517 6.15829 3.78517 5.84171 3.98043 5.64645Z"
                      fill="#1B88F4"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col whitespace-nowrap max-md:mt-6">
                <div className="flex flex-col items-center self-center px-7 py-5 max-w-full text-sky-800 bg-sky-50 rounded-none w-[135px] max-md:px-5">
                  <div className="text-3xl leading-10">9.8</div>
                  <div className="self-stretch mt-6 text-sm leading-5">
                    Exceptional
                  </div>
                  <svg
                    width="66"
                    height="11"
                    viewBox="0 0 66 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M5.68926 0L3.95021 3.61194L0 4.19479L2.86158 7.04149L2.17754 11L5.68926 9.09502L9.20171 11L8.52271 7.04149L11.3793 4.19479L7.45095 3.61194L5.68926 0Z"
                        fill="#FFB80F"
                      />
                      <path
                        d="M19.3445 0L17.6055 3.61194L13.6553 4.19479L16.5168 7.04149L15.8328 11L19.3445 9.09502L22.857 11L22.178 7.04149L25.0346 4.19479L21.1062 3.61194L19.3445 0Z"
                        fill="#FFB80F"
                      />
                      <path
                        d="M32.9998 0L31.2608 3.61194L27.3105 4.19479L30.1721 7.04149L29.4881 11L32.9998 9.09502L36.5123 11L35.8333 7.04149L38.6899 4.19479L34.7615 3.61194L32.9998 0Z"
                        fill="#FFB80F"
                      />
                      <path
                        d="M46.6546 0L44.9155 3.61194L40.9653 4.19479L43.8269 7.04149L43.1429 11L46.6546 9.09502L50.167 11L49.488 7.04149L52.3446 4.19479L48.4163 3.61194L46.6546 0Z"
                        fill="#FFB80F"
                      />
                      <path
                        d="M60.3097 0L58.5709 3.61194L54.6206 4.19479L57.4819 7.04149L56.7982 11L60.3097 9.09502L63.8225 11L63.1431 7.04149L65.9999 4.19479L62.0718 3.61194L60.3097 0Z"
                        fill="#FFB80F"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_601_219">
                        <rect width="66" height="11" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="justify-center items-center px-16 py-5 mt-20 text-base leading-6 text-center text-white bg-blue-500 rounded-xl max-md:px-5 max-md:mt-10">
                  View
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
