import React from "react";
import "./Section1.css";
import { useCursorContext } from "../contexts/CursorContext";

interface Section1Props {
  width: number;
}

const Section1: React.FC<Section1Props> = ({ width }) => {
  const { setIsHovering } = useCursorContext();
  return (
    <div className=" h-screen bg-[#002836] relative overflow-hidden ">
      <div
        onMouseEnter={() => setIsHovering("Buy")}
        onMouseLeave={() => setIsHovering("")}
        className=" flex  h-[calc(50vh-48px)]"
      >
        <div className="w-1/2 flex pt-2 font-bebas font-bold bg-black text-zinc-200 ">
          <div className="w-1/2 flex-col text-8xl md:pl-3  ">
            <p>Miami, FL</p>
            <p className="text-6xl">biggest event of the year</p>
            <p className="text-4xl text-[#ff001e]/80">10/10/2022</p>
          </div>
          <div className="w-1/2 -rotate-90 text-9xl text-center">
            Get it now !
          </div>
        </div>
        <div className="w-1/2  flex items-center justify-center bg-[#ff001e] text-black font-bebas">
          <p className="text-[300px] font-bold pt-12">Skptc</p>
          <p className="text-sm">Inc</p>
        </div>
      </div>
      <div
        onMouseEnter={() => setIsHovering("Go")}
        onMouseLeave={() => setIsHovering("")}
        className=" w-full h-24 flex items-center absolute top-1/2 -translate-y-1/2 bg-[#ff001e]"
      >
        <div className="flex  items-center border-y-8 border-dashed w-full border-black h-[90%]">
          <h1 className="move-text inline-block text-6xl font-anton font-semibold uppercase tracking-widest text-">
            - Buy tickets for 10/10/2022 Miami show -
          </h1>
          <h1
            id="second"
            className="move-text inline-block text-6xl font-anton font-semibold uppercase tracking-widest text-"
          >
            - Buy tickets for 10/10/2022 Miami show -
          </h1>
        </div>
      </div>
      <div className="mt-[96px] flex justify-center items-center h-[calc(50vh-48px)] bg-black absolute w-full">
        <h1 className="text-white text-center  font-bowlby text-8xl z-50  ">
          Limited editon tickets
        </h1>
      </div>
      <div
        style={{ width }}
        className="mt-[96px]  h-[calc(50vh-48px)] bg-[#ff001e] absolute w-full"
      >
        <h1 className="text-black text-8xl text-center mt-20 font-bowlby w-[100vw]">
          Limited edition tickets
        </h1>
      </div>
    </div>
  );
};

export default Section1;
