"use Client";
import react from "react";
import Main from "./Main.js";
import Footer from "./Footer.js";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full ">
        <div className="flex justify-center items-center  px-2  bg-gray-800 max-md:px-5">
          <div className="flex gap-5 justify-between max-w-full w-[900px] max-md:flex-wrap">
            <div className="flex flex-col flex-1 justify-center min-h-12 m-3 items-start  bg-white rounded-lg border border-solid border-zinc-200">
              <div className="w-8 h-8 ml-2 mt-2 aspect-square">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 10.5C1.25 5.39139 5.39139 1.25 10.5 1.25C15.6086 1.25 19.75 5.39139 19.75 10.5C19.75 15.6086 15.6086 19.75 10.5 19.75C5.39139 19.75 1.25 15.6086 1.25 10.5ZM10.5 2.75C6.21981 2.75 2.75 6.21981 2.75 10.5C2.75 14.7802 6.21981 18.25 10.5 18.25C14.7802 18.25 18.25 14.7802 18.25 10.5C18.25 6.21981 14.7802 2.75 10.5 2.75Z"
                    fill="#626E79"
                  />
                  <path
                    d="M16.081 16.0805C16.3739 15.7876 16.8488 15.7876 17.1417 16.0805L21.3843 20.3232C21.6772 20.6161 21.6772 21.0909 21.3843 21.3838C21.0914 21.6767 20.6165 21.6767 20.3236 21.3838L16.081 17.1412C15.7881 16.8483 15.7881 16.3734 16.081 16.0805Z"
                    fill="#626E79"
                  />
                </svg>
              </div>
            </div>
            <div className="flex gap-10 justify-between mx-1 ml-10 my-auto text-sm leading-5 text-gray-300">
              <div>Categories</div>
              <div>Website Builders</div>
              <div>Today's deals</div>
            </div>
          </div>
        </div>
        <Main />
        <Footer />
      </div>
    </>
  );
}
