'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from 'next/dynamic';
const SlickSlider = dynamic(() => import('./slider'), {
  ssr: false // This ensures the component is not SSR'd
});

export default function ProductDetails() {
  return (
    <section className="space-y-16 py-16">
      <div className="lg:px-16 px-8 flex flex-col lg:flex-row items-center lg:space-x-16 space-y-12 lg:space-y-0 justify-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left self-center">
          <div className="p-4 lg:p-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Title</h2>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              Project description section 1
            </p>
            <p className="text-lg text-gray-700 mb-6 font-medium">
            A design philosophy is a set of principles that guide how something is designed. It can include principles related to aesthetics, functionality, usability, or other aspects of the design process. A strong design philosophy can help ensure that a design is effective, cohesive, and meets the needs of its users
            </p>
            </div>
        </div>
      </div>
        <SlickSlider />
    </section>
  );
}
