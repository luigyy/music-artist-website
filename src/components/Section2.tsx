import React, { useEffect, useState } from "react";
import "./Section2.css";
import { useInView } from "react-intersection-observer";

interface Section2Props {}

const Section2: React.FC<Section2Props> = ({}) => {
  const { ref, inView, entry } = useInView({});
  return (
    <div
      ref={ref}
      className="overflow-hidden h-screen bg-black font-anton relative"
    >
      <img
        src="second-section-img.jpg"
        className="object-cover w-96 absolute left-1/2 -translate-x-1/2 pt-12 rounded-full saturate"
        alt=""
      />
      <div className="text-white  left-1/2 -translate-x-1/2 top-1/2 absolute text-9xl font-bowlby">
        <span className="tracking-[02rem] overflow-hidden appear-container">
          <span
            className={`rotate-[-15deg]  inline-block relative h-[200px]  ${
              inView ? "appear" : ""
            }`}
            data-appear="left"
            id="delay-0"
          >
            S
          </span>
          <span
            className={`rotate-[-10deg] inline-block ${inView ? "appear" : ""}`}
            data-appear="left"
            id="delay-1"
          >
            K
          </span>
          <span
            className={`rotate-[-deg] inline-block ${inView ? "appear" : ""}`}
            data-appear="left"
            id="delay-3"
          >
            P
          </span>
          <span className="text-[#ff001e]">
            <span
              className={`inline-block rotate-[10deg] ${
                inView ? "appear" : ""
              }`}
              data-appear="right"
              id="delay-4"
            >
              T
            </span>
            <span
              className={`inline-block rotate-[15deg] ${
                inView ? "appear" : ""
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
          className={`max-w-[200px] mt-20 ml-4 ${inView ? "appear" : ""} `}
          data-appear="left"
        >
          <h1 className="text-3xl text-[#ff001e] ">Lorem ipsum</h1>
          <p className="text-white pt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            debitis recusandae quibusdam{" "}
            <span className="text-[#ff001e]"> sint quos </span> consequuntur
            voluptas veritatis iusto doloribus culpa?
          </p>
        </div>
        <div
          className={`mt-72 text-white mr-4 max-w-[200px] font-anton  ${
            inView ? "appear" : ""
          }`}
          data-appear="right"
        >
          <h1 className="text-3xl text-[#ff001e]">Lorem, ipsum.</h1>
          <p className="pt-5">
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
