import React from "react";
import "./Section1.css";

interface Section1Props {}

const Section1: React.FC<Section1Props> = ({}) => {
  return (
    <div className=" h-screen bg-[#002836] relative overflow-hidden">
      <div className="border-2 border-dashed h-"></div>
      <div className=" w-full h-24 flex items-center absolute top-1/2 -translate-y-1/2 bg-[#ff001e]/80">
        <div className="flex  items-center border-y-8 border-dashed w-full border-zinc-200 h-[90%]">
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
      <div></div>
    </div>
  );
};

export default Section1;
