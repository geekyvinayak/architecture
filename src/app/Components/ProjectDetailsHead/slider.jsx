import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
    { id: 1, src: 'https://dlifeinteriors.com/wp-content/uploads/2023/06/location-banglore-mobile-banner1.jpg', alt: 'Project 1', colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-2' },
    { id: 2, src: 'https://weadesign.com/wp-content/uploads/2024/03/luxury-bedroom-design-1200x900.webp', alt: 'Project 2', colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
    { id: 3, src: 'https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', alt: 'Project 3', colSpan: 'lg:col-span-2', rowSpan: 'lg:row-span-1' },
    { id: 4, src: 'https://st.hzcdn.com/simgs/pictures/hallways/j-design-group-interior-designers-miami-bal-harbour-j-design-group-interior-designers-miami-modern-img~fa0187270eeb5d43_14-2889-1-0a6886b.jpg', alt: 'Project 4', colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
    { id: 5, src: 'https://plus.unsplash.com/premium_photo-1681113076872-c74b8926e70c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', alt: 'Project 5', colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
    { id: 6, src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D', alt: 'Project 6', colSpan: 'lg:col-span-1', rowSpan: 'lg:row-span-1' },
  ];
const SlickSlider = () => {
    const isMobile = window.innerWidth < 767

    console.log("movile",window.innerWidth,isMobile)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile?1:3,
    slidesToScroll: 1,
    variableWidth: isMobile ?false : true
    
  };

  return (
    <div className="slick-slider-container h-[470px] overflow-hidden">
      <Slider {...settings}>
        {projects.map((ele,index)=>{return <div className="max-h-[460px] px-5" key={index}>
            <Image
                src={ele.src}
                alt={ele.alt}
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
