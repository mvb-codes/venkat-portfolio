import { useState } from "react";
import { workExperiences } from "../constants/index.js";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">Work Experience 💼</p>

        <div className="work-container grid lg:grid-cols-3 gap-8">
          {/* Left side (cropped photo fills column) */}
          <div className="work-canvas col-span-1">
            <div className="w-full h-fit rounded-xl overflow-hidden shadow-lg">
              <img
                src="/assets/Photo2.jpeg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side (experiences) */}
          <div className="work-content col-span-2">
            <div className="space-y-10 flex-col p-8" >
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() =>
                    setAnimationName(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName("idle")}
                  className="group bg-black-100 hover:bg-black-200 hover:shadow-lg rounded-lg transition-all duration-300 ease-in-out p-4 flex gap-4"
                >
                  {/* Logo */}
                  <div className="flex-shrink-0 my-8">
                    <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="my-8">
                    <p className="font-bold text-base text-white-800">
                      {item.name}
                    </p>
                    <p className="text-lg mb-4 text-gray-400">
                      {item.pos} — <span>{item.duration}</span>
                    </p>

                    <ul className="list-disc list-inside space-y-1 text-l text-gray-300 group-hover:text-white transition-all duration-300 ease-in-out">
                      {item.title.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
