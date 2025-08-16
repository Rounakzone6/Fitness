import React from "react";
import { about } from "../assets";

const About = () => {
  return (
    <div className="py-10 bg-gray-100 pr-6 relative">
      <div className="absolute md:top-20 top-14 left-5 md:left-70 z-10 bg-white md:py-6 py-2 px-10">
        <p className="md:text-4xl text-xl font-medium">
          30 YEARS OF EXPERIENCE
        </p>
      </div>
      <div className="flex relative gap-6 flex-col md:flex-row">
        <img
          className="rounded-br-4xl"
          height={740}
          width={640}
          src={about}
          alt="About"
        />
        <div className="md:mt-35 p-4">
          <hr className="w-[6vw] border-t-3 border-red-500" />
          <h2 className="text-4xl font-medium mb-4">Learn More About Us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium maxime placeat quas, reprehenderit nemo natus aut sit,
            aliquam voluptatibus quos ratione facere voluptate ullam, cupiditate
            quis totam sint aliquid dolorem numquam nihil ex debitis fuga.
            Facere explicabo consequuntur, maxime sit ullam illo incidunt eos
            non officiis saepe quia repudiandae soluta ratione? At officiis
            minima nihil enim unde fugiat eaque nemo voluptatem atque, quia
            corporis quasi doloremque amet placeat molestias deleniti, saepe
            provident ab vero quaerat quae expedita voluptates, excepturi
            dolorum.
          </p>
          <button className="bg-red-700 text-white py-2 mt-6 cursor-pointer px-4 rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
