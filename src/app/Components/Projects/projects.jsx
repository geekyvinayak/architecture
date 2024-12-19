import { projects } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';

const ProjectSection = () => {

  return (
    <section className="py-12 ">
      <div className="lg:homepage-container relative min-h-screen lg:px-16 px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {projects.map((project,index) => (
            <div
              key={project.id} 
              className={`relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer bg-white ${project?.main?.colSpan} ${project?.main?.rowSpan} `}
            >
              <Link href={`/projectdetails?id=${project.id}`}>
              <Image
                src={project?.main?.src}
                alt={project?.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                quality={50}
              />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
