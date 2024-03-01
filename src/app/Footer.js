import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center px-16 py-12 bg-gray-800 max-md:px-5">
        <div className="flex gap-5 justify-between mt-2.5 max-w-full w-[843px] max-md:flex-wrap">
          <div className="max-md:max-w-full">
            <div className="flex justify-between gap-32 max-md:flex-col max-md:gap-20 max-md:">
              <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-sm leading-5 whitespace-nowrap text-stone-300 max-md:mt-10">
                  <div className="text-base leading-6 text-white uppercase">
                    Categories
                  </div>
                  <div className="mt-6">Web Builder</div>
                  <div className="mt-8">Hosting</div>
                  <div className="mt-7 text-sm leading-5">Data Center</div>
                  <div className="mt-8">Robotic-Automation</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-sm leading-5 whitespace-nowrap text-stone-300 max-md:mt-10">
                  <div className="text-base leading-6 text-white uppercase">
                    Contact
                  </div>
                  <div className="mt-5">Contact</div>
                  <div className="mt-7">Privacy Policy</div>
                  <div className="mt-6">Terms Of Service</div>
                  <div className="mt-7 text-sm leading-5">Categories</div>
                  <div className="mt-6">About</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 my-auto text-sm leading-5 text-gray-300 whitespace-nowrap">
            <div className="grow">United States</div>
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
    </>
  );
};

export default Footer;
