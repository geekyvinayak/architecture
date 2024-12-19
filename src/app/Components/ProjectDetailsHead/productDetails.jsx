'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from 'next/dynamic';
import { useSearchParams } from "next/navigation";
const SlickSlider = dynamic(() => import('./slider'), {
  ssr: false // This ensures the component is not SSR'd
});
import { projects } from '@/app/constants';
import { useMemo } from "react";

export default function ProductDetails() {
  const searchParams = useSearchParams()
 
  const id = searchParams.get('id')
  const projectData = useMemo(() => {
    return projects.find(item => item.id == id);
  }, [id]);
  return (
    <section className="space-y-16 py-16">
      <div className="lg:px-16 px-8 flex flex-col lg:flex-row items-center lg:space-x-16 space-y-12 lg:space-y-0 justify-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left self-center">
          <div className="p-4 lg:p-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{projectData.name}</h2>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              {projectData.category}
            </p>
            <p className="text-lg text-gray-700 mb-6 font-medium">
            {projectData.description}
            </p>
            </div>
        </div>
      </div>
        <SlickSlider images={projectData?.gallery}/>
    </section>
  );
}
