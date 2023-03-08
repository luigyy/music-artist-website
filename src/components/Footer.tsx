import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="h-[80vh] bg-black px-2 pt-32 pb-10 font-anton">
      <h1 className="ml-12 max-w-[80%] border-b-4 border-b-[#f0011e] px-2 font-bowlby text-4xl text-[#ff001e] md:ml-20 md:max-w-[1000px] md:text-7xl 2xl:max-w-[1300px] 2xl:text-8xl">
        Subscribe to our mail
      </h1>

      <p className="mt-10 ml-12 max-w-[600px] text-xl text-white md:ml-20 md:text-3xl 2xl:max-w-[850px] 2xl:text-5xl">
        To get updates, advance information, merch drops and more, directly into
        you mailbox
      </p>

      <p className="absolute bottom-5 right-10 text-sm text-white/50 md:text-base ">
        Luigy Valverde, 2023. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
