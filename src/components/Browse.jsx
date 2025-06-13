import React from "react";
import { categoryCard } from "../data/Data";
import CategoryCards from "../common/CategoryCards";

export const Browse = () => {
  return (
    <div className="py-4 bg-[#309689]/10">
      <p className="font-bold text-xl md:text-3xl capitalize p-4 text-center px-4 md:px-0">
        Browse by Category
      </p>
      <p className="text-sm text-center px-4 md:px-0">
        Discover a wide range of opportunities tailored to your unique skills
        and passions. Browse by category to find the perfect fit
        for your career goals and take the next step toward a brighter future.
      </p>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Render the cards here */}
        <CategoryCards cards={categoryCard} />
      </div>
    </div>
  );
};
export default Browse;
