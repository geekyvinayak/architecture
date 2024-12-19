import OurProcess from "../Components/OurProcess";
import OurStory from "../Components/OurStory";
import OurValues from "../Components/OurValues";
import Philosophy from "../Components/Philosphy";
import WhoWeAre from "../Components/WhoWeAre";

export default function AboutUS() {
  return (
    <div>
   <section className="space-y-16 mt-2">

{/* Background Image Section with Container */}
<div className="lg:homepage-container relative min-h-[50vh] lg:px-16"> {/* Apply padding on large screens only */}
<div className="relative">
{/* Overlay */}
<div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> {/* Semi-transparent black overlay */}

{/* Background Image Section */}
<div
className="ImageBackgroundWrap flex bg-cover bg-center bg-fixed h-[50vh]"
style={{
  backgroundImage: 'url(https://static.wixstatic.com/media/94e66f_6b59effee9b0403f95c63c8507c9b9b8~mv2_d_5492_4442_s_4_2.jpg/v1/fill/w_1191,h_1095,fp_0.59_0.22,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/94e66f_6b59effee9b0403f95c63c8507c9b9b8~mv2_d_5492_4442_s_4_2.jpg)',
}}
>
{/* Content Section */}
<div className="self-end max-w-4xl mx-auto pt-32 pb-24 mb-[-50] relative z-20"> {/* Ensure content is above overlay */}
  <div className="TextBackground bg-opacity-80 p-12 text-center text-white">
    <h2 className="text-4xl font-bold">Maitri Associates</h2>
    <p className="mt-4 text-lg font-bold">
      Lorem ipsum dolor sit amet, nec ea nihil nostrum accommodare, in usu
      movet consul regione. Option delicata vis te, vim fierent tacimates ex.
    </p>
  </div>
</div>
</div>
</div>
</div>
</section>
        <Philosophy isAboutUsPage={true}/>
        <WhoWeAre />
        <OurProcess />
        <OurValues />
        <OurStory />
    </div>
  );
}
