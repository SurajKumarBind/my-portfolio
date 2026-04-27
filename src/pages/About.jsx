import React from "react";

const About = () => {
  return (
    <section id="about" className="py-35 px-30 bg-gray-900/97">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center">
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/Sk/sk1.jpg"
            alt="Suraj Photo"
            className="w-58 h-74 object-cover mx-auto shadow-lg rounded-[50%/55%]"
            data-aos="zoom-in"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left" data-aos="fade-left">
          <h3 className="text-gray-300 text-3xl font-bold mb-4">Who Am I?</h3>
          <p className="text-gray-300 text-base md:text-lg">
            

I am an Assistant Professor in Computer Science at INMANTEC Group of Institutions, Ghaziabad, and a passionate full-stack developer with strong expertise in both frontend and backend technologies. 

I specialize in building scalable applications, designing responsive user interfaces, and delivering smooth, user-friendly experiences. Alongside teaching, I continuously work on real-world projects and stay updated with modern technologies to bridge the gap between academics and industry.

My focus is on writing clean, maintainable code, developing reusable components, and continuously improving my technical and problem-solving skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
