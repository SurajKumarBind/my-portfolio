import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gray-900/97">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/Sk/sk1.jpg"
            alt="Suraj Photo"
            className="w-[230px] h-[300px] object-cover mx-auto shadow-lg rounded-[50%/55%]"
            data-aos="zoom-in"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left" data-aos="fade-left">
          <h3 className="text-gray-300 text-3xl font-bold mb-4">
            Who Am I?
          </h3>
          <p className="text-gray-300 text-base md:text-lg">
            Passionate developer with experience in both frontend and backend.
            Expert in building scalable apps, responsive UI, and smooth user
            experiences. Focused on clean code, reusable components, and
            continuous improvement.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;