'use client'
export default function HeroSection() {
  return (
    <section className="space-y-16">

      {/* Background Image Section with Container */}
      <div className="lg:homepage-container relative min-h-screen lg:px-16"> {/* Apply padding on large screens only */}
  <div className="relative">
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> {/* Semi-transparent black overlay */}

    {/* Background Image Section */}
    <div
      className="ImageBackgroundWrap flex bg-cover bg-center bg-fixed h-[100vh]"
      style={{
        backgroundImage: 'url(https://static.wixstatic.com/media/94e66f_5401b56592d94995a01a664477312be6~mv2_d_5714_3677_s_4_2.jpg/v1/fill/w_980,h_800,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/94e66f_5401b56592d94995a01a664477312be6~mv2_d_5714_3677_s_4_2.jpg)',
      }}
    >
      {/* Content Section */}
      <div className="self-end max-w-4xl mx-auto pt-32 pb-24 mb-10 relative z-20"> {/* Ensure content is above overlay */}
        <div className="TextBackground bg-opacity-80 p-12 text-center text-white">
          <h2 className="text-3xl font-bold">CONTENT HEADING HERE</h2>
          <p className="mt-4 text-lg font-bold">
            Lorem ipsum dolor sit amet, nec ea nihil nostrum accommodare, in usu
            movet consul regione. Option delicata vis te, vim fierent tacimates ex.
            An qui posse facer, pri an unum malis persecuti. Partiendo comprehensam
            mediocritatem vel eu, ei saepe mollis accusamus.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
}
