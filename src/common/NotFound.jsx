import React from "react";
import not from "../assets/404.gif";

export default function NotFound() {
  const cards = Array.from({ length: 3 });

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 py-4 md:py-10">
        {/* txt */}
        <div className="space-y-6">
          <p className="w-64 lg:w-80 h-10 bg-gray-200 rounded-md animate-pulse"></p>
          <p className="w-96 lg:w-[28rem] h-10 bg-gray-200 rounded-md animate-pulse"></p>
          <div className="pt-4 space-y-4">
            <p className="w-full h-4 bg-[#309689]/10 rounded animate-pulse"></p>
            <p className="w-64 h-4 bg-[#309689]/10 rounded animate-pulse"></p>
            <p className="w-48 h-4 bg-[#309689]/10 rounded animate-pulse"></p>
            <p className="w-full h-4 bg-[#309689]/10 rounded animate-pulse"></p>
          </div>
          <p className="w-32 h-8 bg-[#309689]/40 rounded-md py-2 animate-pulse"></p>
          <div className="py-4 md:py-8">
          <a
            href="/"
            className="rounded-md bg-[#309689] px-3.5 py-2.5 text-sm md:text-base font-semibold text-white shadow-xs hover:bg-[#309689]/90"
          >
            Go back home
          </a>
          </div>
        </div>
        {/* image */}
        <div className="flex flex-col items-start w-full lg:w-1/2">
          <img className="max-w-full h-auto" alt="Page not found" src={not} />
        </div>
      </div>

      {/* card-like components */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((_, index) => (
          <div key={index} className="flex flex-col items-start gap-4">
            <div className="rounded-full w-20 h-20 bg-gray-200 animate-pulse"></div>
            <p className="w-40 h-4 bg-gray-200 rounded animate-pulse"></p>
            <p className="w-40 h-4 bg-gray-200 rounded animate-pulse"></p>
          </div>
        ))}
      </div>
    </div>
  );
}
