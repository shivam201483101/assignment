"use Client";
import React from "react";
import Image from "next/image";
import download from "./download.png";

const Card4 = () => {
  return (
    <>
      <div className="flex flex-col pt-4 pl-1.5">
        <div className="pr-6 pb-3 mt-4 bg-white rounded-xl max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[23%] relative max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center pl-12 mt-14 max-md:pl-5 max-md:mt-10">
                <Image
                  src={download}
                  alt=""
                  className="aspect-[1.37] w-[141px]"
                />
                <div className="mt-4">CDK</div>
              </div>
              <div className="rounded-full border-2 border-black-600 text-gray-400 p-2 w-11 absolute text-center top-10 left-0">
                4
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[52%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-7 text-base leading-6 text-gray-600 max-md:mt-10 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <span className="font-bold">CDK Resposive Builder:</span>
                  An extensive library of widgets and apps, and detailed
                  step-by-step guides
                </div>
                <div className="font-bold">26 %</div>
                <div className="mt-3.5 font-bold leading-[150%] text-slate-700 max-md:max-w-full">
                  Main highlights
                </div>
                <div className="flex flex-col px-5 max-w-[527px]">
                  <div className="flex flex-col items-start py-4 pr-20 pl-6 mt-2 w-full bg-orange-50 rounded-xl max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-4">
                      <div className="text-base leading-6 text-center text-blue-500">
                        9.9
                      </div>
                      <div className="flex-auto text-base leading-6 text-gray-600 capitalize">
                        building responsive
                      </div>
                    </div>
                    <div className="flex gap-4 mt-6 text-base leading-6 whitespace-nowrap">
                      <div className="text-center text-blue-500">8.9</div>
                      <div className="flex-auto text-gray-600 capitalize">
                        Cool
                      </div>
                    </div>
                    <div className="flex gap-4 mt-6 text-base leading-6 whitespace-nowrap">
                      <div className="text-center text-blue-500">8.9</div>
                      <div className="flex-auto text-gray-600 capitalize">
                        Docs
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 w-full text-base leading-6 text-slate-700 max-md:max-w-full">
                    Why we love it
                  </div>
                  <div className="flex gap-2 self-start mt-3 text-base leading-6 text-gray-600 capitalize whitespace-nowrap">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9999 1.25C9.03157 1.25 6.34306 2.45406 4.39848 4.3986C3.40872 5.38837 2.6108 6.57088 2.06585 7.88493C1.38317 9.27784 0.999878 10.8442 0.999878 12.5C0.999878 18.2989 5.70089 23 11.4999 23C13.1557 23 14.7221 22.6166 16.115 21.934C17.429 21.389 18.6115 20.5912 19.6013 19.6014C21.5459 17.6568 22.7499 14.9683 22.7499 12C22.7499 9.03169 21.5459 6.34317 19.6013 4.3986C17.6567 2.45406 14.9682 1.25 11.9999 1.25Z"
                        fill="#EBF5FF"
                      />
                      <path
                        d="M17.5305 8.46967C17.8234 8.76257 17.8234 9.23743 17.5305 9.53033L11.5304 15.5303C11.2376 15.8232 10.7627 15.8232 10.4698 15.5303L7.46979 12.5303C7.1769 12.2375 7.1769 11.7626 7.46979 11.4697C7.76268 11.1768 8.23755 11.1768 8.53045 11.4697L11.0001 13.9393L16.4698 8.46967C16.7627 8.17678 17.2375 8.17678 17.5305 8.46967Z"
                        fill="#0855A1"
                      />
                    </svg>

                    <div className="flex-auto my-auto">Documentation</div>
                  </div>
                  <div className="flex gap-2 self-start mt-1 text-base leading-6 text-gray-600 capitalize">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9999 1.25C9.03157 1.25 6.34306 2.45406 4.39848 4.3986C3.40872 5.38837 2.6108 6.57088 2.06585 7.88493C1.38317 9.27784 0.999878 10.8442 0.999878 12.5C0.999878 18.2989 5.70089 23 11.4999 23C13.1557 23 14.7221 22.6166 16.115 21.934C17.429 21.389 18.6115 20.5912 19.6013 19.6014C21.5459 17.6568 22.7499 14.9683 22.7499 12C22.7499 9.03169 21.5459 6.34317 19.6013 4.3986C17.6567 2.45406 14.9682 1.25 11.9999 1.25Z"
                        fill="#EBF5FF"
                      />
                      <path
                        d="M17.5305 8.46967C17.8234 8.76257 17.8234 9.23743 17.5305 9.53033L11.5304 15.5303C11.2376 15.8232 10.7627 15.8232 10.4698 15.5303L7.46979 12.5303C7.1769 12.2375 7.1769 11.7626 7.46979 11.4697C7.76268 11.1768 8.23755 11.1768 8.53045 11.4697L11.0001 13.9393L16.4698 8.46967C16.7627 8.17678 17.2375 8.17678 17.5305 8.46967Z"
                        fill="#0855A1"
                      />
                    </svg>
                    <div className="self-start mt-2">Easy Use</div>
                  </div>
                  <div className="flex gap-2 self-start mt-1 text-base leading-6 text-gray-600 capitalize">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9999 1.25C9.03157 1.25 6.34306 2.45406 4.39848 4.3986C3.40872 5.38837 2.6108 6.57088 2.06585 7.88493C1.38317 9.27784 0.999878 10.8442 0.999878 12.5C0.999878 18.2989 5.70089 23 11.4999 23C13.1557 23 14.7221 22.6166 16.115 21.934C17.429 21.389 18.6115 20.5912 19.6013 19.6014C21.5459 17.6568 22.7499 14.9683 22.7499 12C22.7499 9.03169 21.5459 6.34317 19.6013 4.3986C17.6567 2.45406 14.9682 1.25 11.9999 1.25Z"
                        fill="#EBF5FF"
                      />
                      <path
                        d="M17.5305 8.46967C17.8234 8.76257 17.8234 9.23743 17.5305 9.53033L11.5304 15.5303C11.2376 15.8232 10.7627 15.8232 10.4698 15.5303L7.46979 12.5303C7.1769 12.2375 7.1769 11.7626 7.46979 11.4697C7.76268 11.1768 8.23755 11.1768 8.53045 11.4697L11.0001 13.9393L16.4698 8.46967C16.7627 8.17678 17.2375 8.17678 17.5305 8.46967Z"
                        fill="#0855A1"
                      />
                    </svg>
                    <div className="my-auto">Out of box</div>
                  </div>
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
                  <div className="text-3xl leading-10">9.1</div>
                  <div className="self-stretch mt-6 ml-2 text-sm leading-5">
                    Very Good
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
                <div className="justify-center items-center px-16 py-5 mt-60 text-base leading-6 text-center text-white bg-blue-500 rounded-xl max-md:px-5 max-md:mt-10">
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

export default Card4;
