import React from "react";
import "./Hero.css";

const Navbar: React.FC = () => {
  return (
    <div className="absolute text-white flex w-full justify-between font-anton md:px-20 md:pt-5">
      <h1 className={`appear text-3xl`} data-appear="left">
        My<span className={`text-[#e70024]  `}>Logo </span>
      </h1>
      <div className="text-xl flex gap-5">
        <span className={` appear `} data-appear="right">
          Upcoming Gigs
        </span>
        <span className={` appear `} data-appear="right">
          Merch
        </span>
        <span className={` appear `} data-appear="right">
          Menu
        </span>
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
      <div className="w-full h-screen flex justify-center items-center absolute overflow-hidden ">
        <span
          className={`test text-zinc-200   font-anton uppercase tracking-wider font-semibold initialText`}
        >
          Let the party begin!
        </span>
      </div>
    </div>
  );
};

export default page2;
