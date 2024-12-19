"use client"
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = ({images}) => {
    const isMobile = window?.innerWidth < 767

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    variableWidth: isMobile ?false : true
  };

  return (
    <div className="slick-slider-container h-[470px] overflow-hidden">
      <Slider {...settings}>
        {images.map((ele,index)=>{return <div className="max-h-[460px] px-5" key={index}>
            <Image
                src={ele}
                alt={ele}
                width={500}
                height={500}
                className="w-full h-[460px] object-cover"
              />
        </div> })}
      </Slider>
    </div>
  );
};

export default SlickSlider;
