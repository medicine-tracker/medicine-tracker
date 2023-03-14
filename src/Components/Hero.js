import React from "react";
import Image from "next/image";

import heroPhoto from "./assets/Images/hero-img.png";
function Hero() {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex flex-col justify-center">
          <div className="">Get convinience in your medical facilities</div>
          <div>
            We'll help you get your medicine easily anytime and anywhere
          </div>
          <div className="flex">
            <div>Order Now!!</div>
            <div>Sign In!</div>
          </div>
        </div>
        <div className="mx-auto">
          <Image
            src={heroPhoto}
            width={500}
            height={500}
            className=" relative"
          />
          <div className="blurr absolute top-1 left-60"> </div>
          <div className="blurr absolute bottom-1 left-40"> </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
