import React, { useEffect, useState } from "react";
import "./Section2.css";
import { useInView } from "react-intersection-observer";

interface Section2Props {}

const Section2: React.FC<Section2Props> = ({}) => {
  const { ref, inView, entry } = useInView({});
  return (
    <div
      ref={ref}
      className="relative h-screen overflow-hidden bg-black font-anton"
    >
      <img
        src="second-section-img.jpg"
        className="saturate absolute left-1/2 w-96 -translate-x-1/2 rounded-full object-cover pt-12"
        alt=""
      />
      <div className="absolute  left-1/2 top-1/2 -translate-x-1/2 font-bowlby text-9xl text-white 2xl:text-[150px]">
        <span className="appear-animation-container overflow-hidden tracking-[02rem]">
          <span
            className={`relative  inline-block h-[200px] rotate-[-15deg]  ${
              inView ? "appear-animation" : ""
            }`}
            data-appear="left"
            id="delay-0"
          >
            S
          </span>
          <span
            className={`inline-block rotate-[-10deg] ${
              inView ? "appear-animation" : ""
            }`}
            data-appear="left"
            id="delay-1"
          >
            K
          </span>
          <span
            className={`inline-block rotate-[-deg] ${
              inView ? "appear-animation" : ""
            }`}
            data-appear="left"
            id="delay-3"
          >
            P
          </span>
          <span className="text-[#ff001e]">
            <span
              className={`inline-block rotate-[10deg] ${
                inView ? "appear-animation" : ""
              }`}
              data-appear="right"
              id="delay-4"
            >
              T
            </span>
            <span
              className={`inline-block rotate-[15deg] ${
                inView ? "appear-animation" : ""
              }`}
              data-appear="right"
              id="delay-5"
            >
              C
            </span>
          </span>
        </span>
      </div>

      <div className="ml-4 flex justify-between">
        <div
          className={`mt-20 ml-4 max-w-[200px] 2xl:max-w-[300px] ${
            inView ? "appear-animation" : ""
          } `}
          data-appear="left"
        >
          <h1 className="text-3xl text-[#ff001e] 2xl:text-5xl ">Lorem ipsum</h1>
          <p className="pt-5 text-white 2xl:text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            debitis recusandae quibusdam{" "}
            <span className="text-[#ff001e]"> sint quos </span> consequuntur
            voluptas veritatis iusto doloribus culpa?
          </p>
        </div>
        <div
          className={`mt-72 mr-4 max-w-[200px] font-anton text-white 2xl:max-w-[300px]  ${
            inView ? "appear-animation" : ""
          }`}
          data-appear="right"
        >
          <h1 className="text-3xl text-[#ff001e] 2xl:text-5xl">
            Lorem, ipsum.
          </h1>
          <p className="pt-5 2xl:text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, qui accusantium delectus explicabo asperiores ducimus
            quaerat nobis est quibusdam maxime dicta earum repellendus sapiente
            id fuga dolorum rem veniam amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
