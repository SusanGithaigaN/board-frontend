import React from "react";
import Hero from "../common/Hero";
import GoodLife from "../common/GoodLife";
import Faq from "../common/Faq";
import Work from "../components/Work";
import place from "../assets/placeholder.jpg";
import { works } from "../data/Data";
import Blogs from "../components/Blogs";

export const About = () => {
  return (
    <>
      <Hero title="About Us" />
      {/* page content */}
      <div className="about-content md:items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2 md:py-4">
          <div className="font-bold text-2xl md:text-3xl">
            Empowering Careers, Connecting Opportunities
          </div>
          <div className="text-gray-80 font-thin text-base">
            We understand that a good life begins with a good company, which is
            why we partner with forward-thinking organizations worldwide to
            create pathways for meaningful careers. Through our platform, we aim
            to bridge the gap between job seekers and employers, fostering a
            culture of growth, inclusion, and global collaboration. Whether
            you're a professional looking to expand your horizons or a company
            seeking to tap into a diverse pool of talent, we are here to help
            you succeed. Together, let’s build a future where borders don’t
            limit potential, and everyone has the opportunity to thrive.
          </div>
        </div>
        {/* img */}
        <div className="py-6">
          <img
            className="rounded-2xl img-fluid bg-[#000000]/10 blur shadow-xl"
            alt="Hello"
            src={place}
          />
        </div>
        {/* works */}
        <div className="text-center space-y-2">
          <p className="font-bold text-2xl md:text-3xl">How it works</p>
          <p className="font-thin text-base">
            Learn how our simple and efficient process connects you with the best opportunities to advance your career.
          </p>
        </div>
        {/* options */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-4 md:py-6 justify-items-center items-center py-10 md:py-20">
          {works.map((item, index) => (
            <div
              className="flex flex-col items-center text-center space-y-4 mb-2"
              key={index}
            >
              {/* img */}
              <img className="img-fluid h-10 w-10" alt="icon" src={item.icon} />
              {/* header */}
              <p className="font-bold text-base capitalize">{item.cta}</p>
              {/* details */}
              <p className="text-sm text-gray-800">{item.details}</p>
            </div>
          ))}
        </div>

        {/* Good life */}
        <GoodLife />

        {/* FAQs */}
        <Faq />
        {/* work */}
        <Work />
        {/* blog */}
        <Blogs />
      </div>
    </>
  );
};
export default About;
