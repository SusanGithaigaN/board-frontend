import Hero from "./Hero";
import { useJobs } from "../hooks/useJobs";
import JobCard from "../common/JobCard";
import check from "../assets/check.svg";
import Sidebar from "./Sidebar";
import x from '../assets/x.svg';
import fb from '../assets/fb.svg';
import lin from '../assets/in.svg';

const JobDetails = () => {
    const jobs = useJobs();
    return (
        <>
            <Hero title="job details" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-2/3">
                        {/* Active/selected job */}
                        <div className="pb-4">
                            <JobCard jobs={jobs.slice(0, 1)} />
                        </div>
                        {/* Job details */}
                        {/* desc */}
                        <div className="space-y-2 md:space-y-4 py-2 md:py-6">
                            <p className="font-bold text-xl md:text-2xl capitalize">
                                job description
                            </p>
                            <p className="text-sm">
                                Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique.
                                Sit congue non vitae odio sit erat in. Felis eu ultrices a sed
                                massa. Commodo fringilla sed tempor risus laoreet ultricies
                                ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim
                                feugiat enim volutpat. Sem quis viverra viverra odio mauris
                                nunc.
                            </p>
                            <p className="text-sm">
                                Et nunc ut tempus duis nisl sed massa. Ornare varius faucibus
                                nisi vitae vitae cras ornare. Cras facilisis dignissim augue
                                lorem amet adipiscing cursus fames mauris. Tortor amet porta
                                proin in. Orci imperdiet nisi dignissim pellentesque morbi
                                vitae. Quisque tincidunt metus lectus porta eget blandit euismod
                                sem nunc. Tortor gravida amet amet sapien mauris massa.Tortor
                                varius nam maecenas duis blandit elit sit sit. Ante mauris morbi
                                diam habitant donec.
                            </p>
                        </div>
                        {/* responsibilities */}
                        <div className="space-y-2 py-6">
                            <p className="font-bold text-xl md:text-2xl capitalize">
                                key responsibilities
                            </p>
                            {/* li */}
                            <ul className="py-4">
                                <li className="flex flex-row gap-2 list-none space-y-2">
                                    {/* img */}
                                    <img className="img-fluid h-6 w-auto" src={check} />
                                    {/* text */}
                                    <p className="text-sm">
                                        Et nunc ut tempus duis nisl sed massa. Ornare varius
                                        faucibus nisi vitae vitae cras ornare. Cras facilisis
                                        dignissim augu
                                    </p>
                                </li>
                            </ul>
                        </div>
                        {/* skills */}
                        <div className="space-y-2 py-6">
                            <p className="font-bold text-xl md:text-2xl capitalize">
                                Professional Skills
                            </p>
                            {/* li */}
                            <ul className="py-4">
                                <li className="flex flex-row gap-2 list-none space-y-2">
                                    {/* img */}
                                    <img className="img-fluid h-6 w-auto" src={check} />
                                    {/* text */}
                                    <p className="text-sm">
                                        Et nunc ut tempus duis nisl sed massa. Ornare varius
                                        faucibus nisi vitae vitae cras ornare. Cras facilisis
                                        dignissim augu
                                    </p>
                                </li>
                            </ul>
                        </div>
                        {/* tags */}
                        <div className="space-y-2 py-6">
                            <p className="font-bold text-xl md:text-2xl capitalize">tags</p>
                            <div className="flex flex-row gap-4 py-2">
                                <p className="text-sm text-[#309689]/70 font-bold px-4 py-2 rounded-xl bg-[#309689]/10 w-fit">
                                    Full time
                                </p>
                                <p className="text-sm text-[#309689]/70 font-bold px-4 py-2 rounded-xl bg-[#309689]/10 w-fit">
                                    Commerce
                                </p>
                                <p className="text-sm text-[#309689]/70 font-bold px-4 py-2 rounded-xl bg-[#309689]/10 w-fit">
                                    New York
                                </p>
                                <p className="text-sm text-[#309689]/70 font-bold px-4 py-2 rounded-xl bg-[#309689]/10 w-fit">
                                    Corporate
                                </p>
                                <p className="text-sm text-[#309689]/70 font-bold px-4 py-2 rounded-xl bg-[#309689]/10 w-fit">
                                    Location
                                </p>
                            </div>
                        </div>
                        {/* share */}
                        <div className="flex flex-row gap-4 py-2 md:py-12">
                            <p className="capitalize font-bold text-xl pr-2 md:pr-6">share job</p>
                            <img className="img-fluid h-6 w-auto" src={x} />
                            <img className="img-fluid h-6 w-auto" src={fb} />
                            <img className="img-fluid h-6 w-auto" src={lin} />
                        </div>
                        {/* related */}
                        <div className="space-y-4 py-4 md:py-6">
                            <p className="text-xl md:text-4xl capitalize font-bold">related jobs</p>
                            <p className="text-sm">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet</p>
                            <div className="py-2 md:py-4">
                             <JobCard jobs={jobs.slice(1, 4)} />
                             </div>
                        </div>
                    </div>
                    {/* sidenav */}
                    <div className="w-full md:w-1/3">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </>
    );
};
export default JobDetails;
