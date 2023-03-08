import React from "react";
import "./Hero.css";

const Navbar: React.FC = () => {
  return (
    <div className="absolute z-50 flex w-full justify-between overflow-hidden p-5 font-anton text-white md:px-20 md:pt-5">
      <button
        className={`appear underline-animation relative pb-1 text-3xl transition-all 2xl:text-5xl`}
        data-appear="left"
      >
        Ske<span className={`text-[#e70024]`}>ptic </span>
      </button>
      <div className="flex gap-5 text-lg 2xl:text-xl">
        <button
          className={`underline-animation appear inline-block `}
          data-appear="right"
        >
          Upcoming Gigs
        </button>
        <button className={`underline-animation appear `} data-appear="right">
          Merch
        </button>
        <button className={`underline-animation appear `} data-appear="right">
          Menu
        </button>
      </div>
    </div>
  );
};

interface page2Props {}

const page2: React.FC<page2Props> = ({}) => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className={`blur-animation`}>
        <img
          src="hero-bg.jpg"
          className={`saturate absolute h-screen w-full object-cover`}
          alt=""
        />
      </div>
      <Navbar />
      <div className="absolute top-1/2 z-50 flex -translate-y-1/2 -rotate-90 gap-7">
        <h1
          className="underline-animation appear  w-24 font-anton text-[12px] text-zinc-200 2xl:text-lg"
          data-appear="left"
        >
          Nigerian rapper, music and record producer
        </h1>
        <h1
          className="underline-animation appear w-24 pb-2 font-anton text-[12px] text-zinc-200 2xl:text-lg "
          data-appear="left"
        >
          Also known as founder of the nigerian rap movement
        </h1>
      </div>

      <div className="absolute top-2/3 right-0 z-50  -translate-y-1/2 pr-3 font-anton md:right-20 md:pr-0 ">
        <h1
          className="appear pb-5 text-center text-3xl italic text-zinc-200 2xl:text-4xl"
          data-appear="right"
        >
          Latest
        </h1>
        <div className="appear flex gap-10" data-appear="right">
          <div className="relative aspect-[0.8] w-24 object-cover md:w-36 2xl:w-52">
            <img
              src="latest-1.jpg"
              className="saturate  absolute h-full w-full rounded shadow-2xl transition-all duration-200 hover:scale-105"
              alt=""
            />
            <h1 className="absolute  bottom-5 pl-1 text-red-600 ">
              Miami, FL, US
            </h1>
            <h1 className=" absolute bottom-0 pl-1 text-sm text-zinc-300">
              10/10/2022
            </h1>
          </div>
          <div className="relative aspect-[0.8] w-24  object-cover md:w-36 2xl:w-52">
            <img
              src="latest-2.jpg"
              className="saturate absolute h-full w-full rounded shadow-2xl transition-all duration-200 hover:scale-105"
              alt=""
            />

            <h1 className="absolute  bottom-5  pl-1 text-red-600 ">
              Utrecht, Netherlands
            </h1>
            <h1 className="absolute bottom-0 pl-1 text-sm text-zinc-300">
              06/04/2022
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute flex h-screen w-full items-center justify-center overflow-hidden ">
        <span
          className={`test initialText  font-anton font-semibold uppercase tracking-wider text-zinc-200 `}
        >
          Let the party begin!
        </span>
      </div>
    </div>
  );
};

export default page2;
