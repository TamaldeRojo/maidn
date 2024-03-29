import Image from "next/image";
import React from "react";
import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = ({ img, title, mainTitle, price }) => {

  const [imageLoaded, setImageLoaded] = useState(false);


  return (
    <div className="outline-none border-none relative">
      <div className="absolute left-[30px] md:left-[280px] max-w-[250px] sm:max-w-[350px] top-[15%] italic font-bold -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className="text-accent text-[24px] lg:text-[28px]">{title}</h3>
        <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
        
        </h2>

        <h3 className="text-[24px] text-gray-500">
          {/* starting at{" "} */}
          <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
          {/* .00 */}
        </h3>
      </div>
    
      <Image
        className="min-w-[1000px] mx-auto mt-10 h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
        src={img}
        alt="banner"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Slide;