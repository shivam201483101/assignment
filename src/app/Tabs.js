import React from "react";

const Tabs = () => {
  return (
    <>
      <div className="flex gap-1 px-2 my-7 text-sm leading-5 text-gray-600 w-full max-md:flex-wrap">
        <div className="grow justify-center text-sm leading-5 whitespace-nowrap bg-white rounded-xl">
          Tools
        </div>
        <div className="grow justify-center bg-white rounded-xl">
          AWS Builder
        </div>
        <div className="grow justify-center whitespace-nowrap bg-white rounded-xl">
          Start Build
        </div>
        <div className="grow justify-center whitespace-nowrap bg-white rounded-xl">
          Build Supplies
        </div>
        <div className="grow justify-center items-start  text-sm leading-5 whitespace-nowrap bg-white rounded-xl">
          Tooling
        </div>
        <div className="grow justify-center  whitespace-nowrap bg-white rounded-xl">
          BlueHosting
        </div>
      </div>
    </>
  );
};

export default Tabs;
