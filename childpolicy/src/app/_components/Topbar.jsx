import React from "react";
import Image from "next/image";
import logo from "../_assets/elRED-logo.svg";

const Topbar = () => {
  return (
    <div className="flex justify-start pl-5 pt-5 max-w-wrapper mx-auto">
      <div className="flex flex-col items-center">
        <Image src={logo} width={116} alt="Logo" />
        <div className="text-[10px] text-[#df000d] text-center">
          network of networks
        </div>
      </div>
    </div>
  );
};

export default Topbar;
