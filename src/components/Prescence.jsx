import React from "react";
import placeholder from "../assets/placeholder.jpg";
import Button from "../common/Button";

export const Prescence = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="img">
          <img
            className="img-fluid h-full w-auto rounded-xl"
            alt="prescence"
            src={placeholder}
          />
        </div>
        <div className="text space-y-2 md:space-y-4">
          <p className="capitalize text-xl md:text-3xl font-bold py-2">
            Good Life Begins With A Good Company
          </p>
          <p className="text-sm md:text-base font-thin text-gray-500">
            Remote work offers endless possibilities for African jobseekers,
            providing access to global opportunities right from your home. Take
            the first step toward a fulfilling career with companies that value
            your talent and commitment. Let us help you connect with roles that
            align with your skills and ambitions, paving the way for a better
            future.
          </p>
          {/* Buttons section */}
          <div className="flex flex-row items-center gap-4">
            <Button
              buttons={[{ href: "/", label: "search jobs", variant: "primary" }]}
            />
            <p className="text-[#309689] font-semibold underline">Learn more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prescence;
