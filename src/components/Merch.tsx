import React from "react";
import { useCursorContext } from "../contexts/CursorContext";

interface MerchCardProps {
  img: string;
}

const MerchCard: React.FC<MerchCardProps> = ({ img }) => {
  const { setIsHovering } = useCursorContext();
  return (
    <div
      className="relative mx-auto aspect-[9/14] w-[150px] rounded-2xl bg-white transition-all
      duration-1000 hover:rotate-[5deg] hover:scale-110 hover:bg-[#ff001e] md:w-[240px] 2xl:w-[350px]  [&>*:nth-child(2)]:text-[#ff001e] [&>*:nth-child(2)]:hover:rotate-[-5deg] [&>*:nth-child(2)]:hover:scale-105 [&>*:nth-child(2)]:hover:text-white"
      onMouseEnter={() => {
        setIsHovering("More");
      }}
      onMouseLeave={() => {
        setIsHovering("");
      }}
    >
      <div className="absolute h-full w-full rounded-2xl  transition-all duration-1000 hover:rotate-[-8deg] hover:scale-110  ">
        <img src={img} alt="" className="" />
      </div>
      <div className="absolute left-2 bottom-0 w-full font-anton transition-all duration-1000 ">
        <h1 className=" text-2xl tracking-tighter md:text-4xl">
          Skeptic shirt
        </h1>
        <h1 className="">19.90$</h1>
      </div>
    </div>
  );
};

interface MerchProps {}

const Merch: React.FC<MerchProps> = ({}) => {
  return (
    <div className="min-h-[150vh] bg-black pb-10">
      <h1 className="text-center font-bowlby text-6xl tracking-tighter text-[#ff001e] md:pt-52 md:text-8xl 2xl:pt-20  ">
        Merch
      </h1>
      <div className=" grid grid-cols-2 gap-y-10 pt-28 md:grid-cols-3">
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
