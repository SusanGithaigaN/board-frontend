import React from "react";
import place from "../assets/placeholder.jpg";
import quality from "../assets/quality.svg";
import resume from "../assets/resume(1).svg";
import tt from "../assets/tt.svg";
import tc from "../assets/tc.svg";

const Work = () => {
  let data = [
    {
      image: quality,
      text: "Quality Job",
    },
    {
      image: resume,
      text: "Resume builder",
    },
    {
      image: tc,
      text: "Top Companies",
    },
    {
      image: tt,
      text: "Top Talents",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-96">
          {/* full */}
          <div className="col-span-1">
            <img
              src={place}
              alt="placeholder"
              className="w-full h-full object-cover rounded-lg shadow-lg blur-sm shadow-xl"
            />
          </div>
          {/* two */}
          <div className="grid grid-rows-2 gap-4">
            <img
              src={place}
              alt="placeholder"
              className="w-full h-full object-cover rounded-lg shadow-lg blur-sm shadow-xl"
            />
            <img
              src={place}
              alt="placeholder"
              className="w-full h-full object-cover rounded-lg shadow-lg blur-sm shadow-xl"
            />
          </div>
        </div>
        {/* text */}
        <div className="space-y-4 pl-2 md:pl-4">
          <h2 className="font-bold text-2xl md:text-3xl capitalize">
            We’re Only Working
            <br /> With The Best
          </h2>
          <p className="font-thin text-base">
            We are dedicated to connecting ambitious professionals with leading
            companies that set the standard for excellence. By partnering only
            with the best, we ensure that every opportunity on our platform
            reflects quality, growth potential, and a commitment to success.
            Together, we’re building careers that inspire and drive meaningful
            change.
          </p>
          {/* features */}
          <div className="flex items-center space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.map((dat, index) => (
                <div className="flex flex-row gap-4 py-2" key={index}>
                  <img
                    src={dat.image}
                    alt="logo"
                    className="w-8 h-8 object-contain"
                  />
                  <span className="font-medium text-base">{dat.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
