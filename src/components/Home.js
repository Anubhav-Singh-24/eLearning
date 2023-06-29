import React from 'react';
import banner from '../images/banner.png';
import industry from '../images/industry.png';
import projects from '../images/projects.png';
import mentor from '../images/Mentor.webp';
import placement from '../images/placement.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    let navigate = useNavigate();

    return (
            <div className="max-w-9xl w-full rounded-xl overflow-hidden shadow-lg">
                <div className="flex">
                    <div className="w-2/3 bg-black">
                        <div className="p-6 sm:p-8">
                            <h1 className="text-4xl sm:text-5xl font-bold text-cyan-500 mb-4">
                                What we do!
                            </h1>
                            <p className="text-lg sm:text-xl text-cyan-500">
                            Welcome to our eLearning platform, where you can embark on an exciting journey of learning the latest technologies and advancing your skills. We offer a wide range of courses designed to empower you with knowledge and expertise in cutting-edge fields such as Machine Learning, Data Science, Blockchain, Web Development, and more. Whether you're a beginner or an experienced professional, our courses cater to learners of all levels.
                            </p>
                        </div>
                        <div className="pl-6 sm:pl-8 pb-6 sm:pb-8">
                            <button className="px-6 py-3 border-2 border-solid border-cyan-500 bg-black text-cyan-500 hover:rounded-lg font-semibold hover:bg-cyan-500 hover:text-black transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110" onClick={()=>{navigate('/courses')}}>
                                Browse Courses
                            </button>
                        </div>
                    </div>
                    <div className="w-1/3 flex items-center justify-center">
                        <img src={banner} alt="E learning banner" className="w-full" />
                    </div>
                </div>
                <div className="flex mx-2 my-2 ">
                    <div className="w-1/3 flex items-center justify-center">
                        <img src={industry} alt="industry" className="w-full" />
                    </div>
                    <div className="w-2/3 bg-black">
                        <div className="p-6 sm:p-8">
                            <h1 className="text-4xl sm:text-3xl font-bold text-cyan-500 mb-4">
                                Industry-Relevant Curriculum
                            </h1>
                            <p className="text-lg sm:text-lg text-cyan-500">
                                Our course content is meticulously curated by industry experts and professionals who are well-versed in the latest technologies and trends. We prioritize keeping our curriculum up-to-date with the ever-evolving tech landscape, ensuring that learners are equipped with the most relevant and sought-after skills in the industry.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex mx-2 my-2">
                    <div className="w-2/3 bg-black">
                        <div className="p-6 sm:p-8">
                            <h1 className="text-4xl sm:text-3xl font-bold text-cyan-500 mb-4">
                                Hands-On Projects and Real-World Scenarios
                            </h1>
                            <p className="text-lg sm:text-lg text-cyan-500">
                                We believe in learning by doing. Our courses include hands-on projects and real-world scenarios that provide learners with practical experience. By working on these projects, learners can apply their knowledge to solve real problems, thereby bridging the gap between theory and practice.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 flex items-center justify-center">
                        <img src={projects} alt="projects" className="w-2/3" />
                    </div>
                </div>
                <div className="flex mx-2 my-2">
                    <div className="w-1/3 flex items-center justify-center">
                        <img src={mentor} alt="mentor" className="w-2/3" />
                    </div>
                    <div className="w-2/3 bg-black">
                        <div className="p-6 sm:p-8">
                            <h1 className="text-4xl sm:text-3xl font-bold text-cyan-500 mb-4">
                                Expert Instructors and Mentors
                            </h1>
                            <p className="text-lg sm:text-lg text-cyan-500">
                                Our courses are taught by experienced instructors who are passionate about sharing their knowledge and guiding learners on their learning journey. Our mentors provide personalized support and feedback to ensure that learners receive individual attention and guidance throughout their learning experience.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex mx-2 my-2">
                    <div className="w-2/3 bg-black">
                        <div className="p-6 sm:p-8">
                            <h1 className="text-4xl sm:text-3xl font-bold text-cyan-500 mb-4">
                                Career Support and Job Placement
                            </h1>
                            <p className="text-lg sm:text-lg text-cyan-500">
                                We go beyond just providing courses. We offer career support services to help learners transition into the industry. This includes resume building, interview preparation, job placement assistance, and access to a network of industry professionals. We are committed to helping our learners achieve their career goals and make a successful transition into the tech industry.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/3 flex items-center justify-center">
                        <img src={placement} alt="placement" className="w-2/3" />
                    </div>
                </div>
            </div>
    );
};

export default Home;
