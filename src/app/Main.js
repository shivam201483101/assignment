"use Client";
import React from "react";
import Quoteofpage from "./Quoteofpage";
import Tabs from "./Tabs";
import Headings from "./Headings";
import Card from "./AllCard/Card";
import Card2 from "./AllCard/Card2";
import Card3 from "./AllCard/Card3";
import Card4 from "./AllCard/Card4";
import Card5 from "./AllCard/Card5";

const Main = () => {
  return (
    <>
      <div className="w-full px-40 my-2 max-md:px-6 max-lg:px-12">
        <Quoteofpage />
        <hr className="h-px mt-3 bg-zinc-200 border-0 dark:bg-zinc-300"></hr>
        <Tabs />

        <Headings />
        <Card />
        <Card2 />
        <Card3 />
        <Card4 />
        <div className="text-3xl leading-10 my-5 max-w-[495px] text-slate-700">
          Related deals you might like for
        </div>
        <div className="w-full flex gap-8 justify-around flex-row ">
          <Card5 />
          <Card5 />
          <Card5 />
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-3xl leading-10 my-5 max-w-[400px] text-slate-700">
            Sign up and get exclusive special deals
          </div>
          <div className="justify-center px-5 py-5 text-sm my-10 text-center text-white  bg-blue-500 rounded-md">
            Sign Up
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
