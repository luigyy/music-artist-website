import React from "react";
import "./Hero.css";

const Navbar: React.FC = () => {
  return (
    <div className="absolute z-50 text-white flex w-full justify-between font-anton md:px-20 md:pt-5 overflow-hidden">
      <button
        className={`appear pb-1 text-2xl transition-all underline-animation relative`}
        data-appear="left"
      >
        Ske<span className={`text-[#e70024]  `}>ptic </span>
      </button>
      <div className="text-lg flex gap-5">
        <button
          className={`underline-animation inline-block appear `}
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
    <div className="h-screen overflow-hidden">
      <div className={`blur-animation`}>
        <img
          src="hero-bg.jpg"
          className={`object-cover absolute h-screen w-full saturate`}
          alt=""
        />
      </div>
      <Navbar />

      <div className="absolute flex gap-7 top-1/2 z-50 -rotate-90 -translate-y-1/2  ">
        <h1
          className="text-zinc-200 underline-animation  text-[12px] font-anton w-24 appear"
          data-appear="left"
        >
          Nigerian rapper, music and record producer
        </h1>
        <h1
          className="text-zinc-200 underline-animation pb-2 text-[12px] font-anton w-24  appear "
          data-appear="left"
        >
          Also known as founder of the nigerian rap movement
        </h1>
      </div>

      {/* <div className="absolute font-anton">
        <h1 className="text-zinc-200">Latest hits </h1>
        <div></div>
        <div></div>
      </div> */}
      {/* initial text  */}
      <div className="w-full h-screen flex justify-center items-center absolute overflow-hidden ">
        <span
          className={`test text-zinc-200   font-anton uppercase tracking-wider font-semibold initialText`}
        >
          Let the party begin!
        </span>
      </div>
      {/* initial text  */}
    </div>
  );
};

export default page2;
