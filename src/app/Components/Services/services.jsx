import Image from "next/image";

const MyServices = () => {
  const services = [
    {
      id: 1,
      src: "https://www.shutterstock.com/image-vector/house-traditional-architecture-plan-3d-600nw-2348676345.jpg",
      title: "Home Styling Workshop",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      title: "Full Interior Styling",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      title: "Small Space Makeover",
    },
  ];

  return (
    <section className="bg-[#fef8f4] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center  rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            >
              {/* Fixed height and width for consistency */}
              <div className="w-[400px] h-[300px] ">
                <Image
                  src={service.src}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="object-fit w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="justify-center flex items-center mt-16 mb-8"><div className="border-black border-2 px-6 py-2 cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out font-medium">View All Services</div></div>
      </div>
    </section>
  );
};

export default MyServices;
