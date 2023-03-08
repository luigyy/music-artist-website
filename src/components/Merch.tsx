import React from "react";
import { useCursorContext } from "../contexts/CursorContext";

interface MerchCardProps {
  img: string;
}

const MerchCard: React.FC<MerchCardProps> = ({ img }) => {
  const { setIsHovering } = useCursorContext();
  return (
    <div
      className="relative [&>*:nth-child(2)]:hover:rotate-[-5deg] [&>*:nth-child(2)]:hover:text-white [&>*:nth-child(2)]:text-[#ff001e]
      w-[240px] hover:scale-110 [&>*:nth-child(2)]:hover:scale-105 hover:rotate-[5deg] aspect-[9/14] hover:bg-[#ff001e] transition-all duration-1000 bg-white rounded-2xl mx-auto"
      onMouseEnter={() => {
        setIsHovering("More");
      }}
      onMouseLeave={() => {
        setIsHovering("");
      }}
    >
      <div className="w-full h-full hover:rotate-[-8deg] hover:scale-110  transition-all duration-1000 absolute rounded-2xl  ">
        <img src={img} alt="" className="" />
      </div>
      <div className="absolute left-2 bottom-0 w-full transition-all font-anton duration-1000 ">
        <h1 className="text-4xl tracking-tighter">Skeptic shirt</h1>
        <h1 className="">19.90$</h1>
      </div>
    </div>
  );
};

interface MerchProps {}

const Merch: React.FC<MerchProps> = ({}) => {
  return (
    <div className="min-h-[150vh] bg-black pb-10">
      <h1 className="text-[#ff001e] text-8xl text-center pt-52 font-bowlby tracking-tighter  ">
        Merch
      </h1>
      <div className=" grid grid-cols-3 gap-y-10 pt-28">
        {[
          "shirt.png",
          "shirt.png",
          "shirt.png",
          "hoodie.png",
          "hoodie.png",
          "hoodie.png",
        ].map((item) => (
          <MerchCard img={item} />
        ))}
      </div>
    </div>
  );
};

export default Merch;
