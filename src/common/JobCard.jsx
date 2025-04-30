import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import brief from '../assets/brief.svg'
import clock from '../assets/clock.svg'
// import bookmark from '../assets/bookmark.svg'
import pin from '../assets/map-pin.svg'
import sal from '../assets/g135.svg'

export const JobCard = ({ jobs }) => {
  return (
    <div className="space-y-4 md:space-y-6">
      {jobs.map((job, index) => (
        <div
          className="p-4 rounded-lg shadow-xl bg-white flex flex-col md:flex-row md:items-center justify-between space-y-4"
          key={index}
        >
          {/* Left Section (Time and Main Content) */}
          <div className="flex flex-col space-y-4 md:flex-grow">
            {/* Time Element */}
            <div className="self-start">
              <p className="text-xs text-[#309689] font-bold px-2 rounded-md bg-[#309689]/10 w-fit">
                {job.time}
              </p>
            </div>

            {/* Main Content */}
            <div className="flex items-start space-x-4">
              {job.icon && (
                <img
                  src={job.icon}
                  alt={job.title}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div className="space-y-2 md:space-y-4 flex-grow">
                <h3 className="text-lg md:text-xl capitalize font-bold">
                  {job.title}
                </h3>
                <p className="text-sm">{job.companyName}</p>
                <div className="flex flex-wrap items-center space-x-2 gap-2 text-sm text-gray-500 font-semibold">
                  <span className="flex items-center gap-1">
                    <img className="w-4 h-4" alt="briefcase" src={brief} />
                    <p>{job.jobType}</p>
                  </span>
                  <span className="flex items-center gap-1">
                    <img className="w-4 h-4" alt="clock" src={clock} />
                    <p>{job.structure}</p>
                  </span>
                  <span className="flex items-center gap-1">
                    <img className="w-4 h-4" alt="salary" src={sal} />
                    <p>{job.salary}</p>
                  </span>
                  <span className="flex items-center gap-1">
                    <img className="w-4 h-4" alt="location" src={pin} />
                    <p>{job.location}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 self-start md:self-center">
            <button className="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 3.75H6.75C5.645 3.75 4.75 4.645 4.75 5.75v14.5c0 .632.71 1.01 1.208.604l6.292-5.233 6.292 5.233c.498.406 1.208.028 1.208-.604V5.75c0-1.105-.895-2-2-2z"
                />
              </svg>
            </button>
            <Button
              buttons={[{ href: "/", label: "Job Details", variant: "primary" }]}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

JobCard.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      companyName: PropTypes.string.isRequired,
      jobType: PropTypes.string.isRequired,
      structure: PropTypes.string.isRequired,
      salary: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default JobCard;