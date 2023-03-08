import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="h-[80vh] bg-black pt-32 pb-10 font-anton">
      <h1 className="ml-20 max-w-[1000px] border-b-4 border-b-[#f0011e] font-bowlby text-7xl text-[#ff001e] 2xl:max-w-[1300px] 2xl:text-8xl">
        Subscribe to our mail
      </h1>

      <p className="2xl:text-text-5xl mt-10 ml-20 max-w-[600px] text-3xl text-white 2xl:max-w-[850px]">
        To get updates, advance information, merch drops and more, directly into
        you mailbox
      </p>

      <p className="absolute bottom-5 right-10 text-white/50 ">
        Luigy Valverde, 2023. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
