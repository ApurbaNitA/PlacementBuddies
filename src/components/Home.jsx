import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Welcome to Placement Buddies</h1>
                <p className="mt-4 text-lg">Learn. Practice. Succeed in your dream placement.</p>
                <button className="mt-6 bg-white text-blue-500 px-6 py-2 rounded hover:bg-gray-200">
                    Get Started
                </button>
            </div>
            {/* Popular Videos and Subscribe Section */}
            <div className="py-16 px-4 md:px-16 bg-gray-100">
                <h2 className="text-3xl font-bold text-center mb-8">Popular Videos</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {/* Video 1 */}
                    <div className="w-full md:w-1/3 bg-white shadow-md rounded overflow-hidden">
                        <iframe
                            width="100%"
                            height="200"
                            src="https://www.youtube.com/embed/YfVYTDai_iI"
                            title="Popular Video 1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <h3 className="p-4 text-lg font-bold text-gray-700">All about Supply Chain Management</h3>
                    </div>

                    {/* Video 2 */}
                    <div className="w-full md:w-1/3 bg-white shadow-md rounded overflow-hidden">
                        <iframe
                            width="100%"
                            height="200"
                            src="https://www.youtube.com/embed/xo7PFclnEtY"
                            title="Popular Video 2"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <h3 className="p-4 text-lg font-bold text-gray-700">IOCL interview experience</h3>
                    </div>
                </div>

                {/* Subscribe Button */}
                <div className="mt-8 text-center">
                    <a
                        href="https://www.youtube.com/@PlacementBuddies?sub_confirmation=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
                    >
                        Subscribe to Channel
                    </a>
                </div>
            </div>
            {/* Courses Section */}
            <div className="py-16 px-4 md:px-16">
                <h2 className="text-3xl font-bold text-center">Our Top Courses</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Link to="https://www.youtube.com/playlist?list=PLEd-6ZYEX_7dHVWadw7A_Jzpj3afHRIQD" target="_blank" className="bg-white shadow-md p-4 rounded">
                        <h3 className="text-xl font-bold">Process Control</h3>
                        <p className="mt-2 text-gray-600">One stop solution for Process Control.</p>
                    </Link>
                    <div className="bg-white shadow-md p-4 rounded">
                        <h3 className="text-xl font-bold">Java Fullstack Bootcamp</h3>
                        <p className="mt-2 text-gray-600">Become a full-stack developer with Java and React.</p>
                    </div>
                    <div className="bg-white shadow-md p-4 rounded">
                        <h3 className="text-xl font-bold">DSA Essentials</h3>
                        <p className="mt-2 text-gray-600">Master data structures and algorithms for placements.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-gray-100 py-16">
                <h2 className="text-3xl font-bold text-center">What Our Students Say</h2>
                <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8 px-4">
                    <div className="bg-white shadow-md p-6 rounded w-80">
                        <p className="text-gray-600">
                            "The courses are amazing! Helped me crack my dream job."
                        </p>
                        <h4 className="mt-4 font-bold">- John Doe</h4>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded w-80">
                        <p className="text-gray-600">
                            "Great instructors and well-structured material!"
                        </p>
                        <h4 className="mt-4 font-bold">- Jane Smith</h4>
                    </div>
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 text-center">
                <h2 className="text-3xl font-bold mb-6">Start Your Journey Today!</h2>
                <Link to="/courses" className="mt-6 bg-white text-blue-500 px-6 py-2 rounded hover:bg-gray-200">
                    Explore Courses
                </Link>
            </div>
        </div>
    );
};

export default Home;
