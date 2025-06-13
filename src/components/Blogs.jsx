import React from "react";
import { articles } from "../data/Data";

const Blogs = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 md:space-y-4">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            News and Blog
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Stay updated with the latest career tips, industry insights, and
            success stories to guide you on your professional journey
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              key={index}
            >
              <div className="relative">
                <img
                  className="w-full h-48 object-cover blur"
                  src={article.back}
                  alt="Employee Engagement"
                />
                <span className="absolute top-2 left-2 bg-[#309689] text-white text-xs font-semibold rounded-full px-3 py-1 capitalize">
                  {article.icon}
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <h3 className="text-base md:text-xl font-bold mb-3">
                  {article.title}
                </h3>
                <a
                  href="#"
                  className="text-[#309689] hover:text-[#309689]/70 font-medium"
                >
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
