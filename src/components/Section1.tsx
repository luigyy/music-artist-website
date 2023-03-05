import React from "react";
import "./Section1.css";

interface Section1Props {}

const Section1: React.FC<Section1Props> = ({}) => {
  return (
    <div className=" bg-[#002836] h-screen">
      <div className=""></div>
      <div className="w-full h-full">
        <img src="second-section-image.jpg" alt="" />
      </div>
    </div>
  );
};

export default Section1;
