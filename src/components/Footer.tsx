import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="bg-black h-[80vh] font-anton pt-32 pb-10">
      <h1 className="text-7xl border-b-4 ml-20 max-w-[1000px] border-b-[#f0011e] text-[#ff001e] font-bowlby">
        Subscribe to our mail
      </h1>

      <p className="text-3xl text-white max-w-[600px] mt-10 ml-20">
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
