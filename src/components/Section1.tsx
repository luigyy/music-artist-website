import React from "react";
import "./Section1.css";
import { useCursorContext } from "../contexts/CursorContext";

interface Section1Props {
  width: number;
}

const Section1: React.FC<Section1Props> = ({ width }) => {
  const { setIsHovering } = useCursorContext();
  return (
    <div className=" relative min-h-screen overflow-hidden bg-[#002836]  ">
      <div
        onMouseEnter={() => setIsHovering("Buy")}
        onMouseLeave={() => setIsHovering("")}
        className=" flex  h-[calc(50vh-48px)]"
      >
        <div className=" flex w-1/2 bg-black pt-2 font-bebas font-bold text-zinc-200 ">
          <div className="mx-auto flex  lg:w-full">
            <div className="flex w-1/2 flex-col justify-center pl-2 text-4xl md:text-8xl 2xl:text-9xl">
              <h1>Miami, FL</h1>
              <h1 className="md:text-6xl 2xl:text-7xl">
                biggest event of the year
              </h1>
              <h1 className="text-2xl text-[#ff001e]/80 md:text-4xl 2xl:text-5xl">
                10/10/2022
              </h1>
            </div>
            <div className="flex w-1/2  -rotate-90 items-center justify-center text-center text-2xl tracking-widest md:text-9xl md:tracking-normal 2xl:text-[180px] ">
              <h1>Get it now!</h1>
            </div>
          </div>
        </div>
        <div className="flex  w-1/2 items-center justify-center bg-[#ff001e] font-bebas text-black">
          <p className="text-8xl font-bold transition-all md:text-[300px]  2xl:text-[400px]">
            Skptc
          </p>
          <p className="pl-1 text-sm">Inc</p>
        </div>
      </div>
      <div
        onMouseEnter={() => setIsHovering("Go")}
        onMouseLeave={() => setIsHovering("")}
        className=" absolute top-1/2 flex h-24 w-full -translate-y-1/2 items-center bg-[#ff001e]"
      >
        <div className="flex  h-[90%] w-full items-center border-y-8 border-dashed border-black">
          <h1 className="move-text text- inline-block font-anton text-3xl font-semibold uppercase tracking-widest md:text-6xl">
            - Buy tickets for 10/10/2022 Miami show -
          </h1>
          <h1
            id="second"
            className="move-text text- inline-block font-anton text-3xl font-semibold uppercase tracking-widest md:text-6xl"
          >
            - Buy tickets for 10/10/2022 Miami show -
          </h1>
        </div>
      </div>
      <div className="  absolute mt-[96px] flex min-h-[calc(50vh-40px)] w-full items-center justify-center bg-black pb-10">
        <h1 className="z-50  text-center font-bowlby text-4xl text-white md:text-8xl 2xl:text-9xl  ">
          Limited editon tickets
        </h1>
      </div>
      <div
        style={{ width }}
        className="absolute   mt-[96px] min-h-[calc(50vh-48px)] w-full bg-[#ff001e] pb-10"
      >
        <h1 className="mt-32 w-[100vw] text-center font-bowlby text-4xl text-black md:mt-20 md:text-8xl 2xl:text-9xl">
          Limited edition tickets
        </h1>
      </div>
    </div>
  );
};

export default Section1;
