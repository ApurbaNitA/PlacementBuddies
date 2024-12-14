import React from "react";
import { Link } from "react-router-dom";

const Home = ({ showLoginButton }) => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 text-center dark:from-gray-600 dark:to-gray-400">
                <h1 className="text-4xl font-bold">Welcome to Placement Buddies</h1>
                <p className="mt-4 text-lg">Learn. Practice. Succeed in your dream placement.</p>
                {/* <button className="mt-6 bg-white text-blue-500 px-6 py-2 rounded hover:bg-gray-200">
                    Get Started
                </button> */}
                {showLoginButton && (
                    <Link
                        to="/auth"
                        className="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded hover:bg-gray-200 transition dark:text-gray-500"
                    >
                        Login
                    </Link>
                )}
            </div>
            {/* Popular Videos and Subscribe Section */}
            <div className="py-16 px-4 md:px-16 bg-gray-100 dark:bg-gray-900 ">
                <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Popular Videos</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {/* Video 1 */}
                    <div className="w-full md:w-1/3 bg-white shadow-md rounded overflow-hidden dark:bg-gray-600">
                        <iframe
                            width="100%"
                            height="200"
                            src="https://www.youtube.com/embed/YfVYTDai_iI"
                            title="Popular Video 1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <h3 className="p-4 text-lg font-bold text-gray-700 dark:text-gray-100">All about Supply Chain Management</h3>
                    </div>

                    {/* Video 2 */}
                    <div className="w-full md:w-1/3 bg-white shadow-md rounded overflow-hidden dark:bg-gray-600">
                        <iframe
                            width="100%"
                            height="200"
                            src="https://www.youtube.com/embed/xo7PFclnEtY"
                            title="Popular Video 2"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <h3 className="p-4 text-lg font-bold text-gray-700 dark:text-gray-100">IOCL interview experience</h3>
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
            <div className="py-16 px-4 md:px-16 dark:bg-gray-800 dark:text-white">
                <h2 className="text-3xl font-bold text-center">About Us</h2>
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg leading-relaxed">
                        At <strong>Placement Buddies</strong>, we are dedicated to empowering students
                        and professionals to achieve their career goals. With curated courses, real-world
                        interview experiences, and practical learning materials, we aim to bridge the gap between
                        academics and industry requirements. Whether you're preparing for placements or
                        enhancing your skills, we're here to guide you every step of the way.
                    </p>
                    <p className="mt-4 text-lg leading-relaxed">
                        Join our community of learners and unlock your potential. Together, let's
                        build a brighter future!
                    </p>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-gray-100 py-16 dark:bg-gray-900 dark:text-white">
                <h2 className="text-3xl font-bold text-center">What Our Students Say</h2>
                <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8 px-4">
                    <div className="bg-white shadow-md p-6 rounded w-80 dark:bg-gray-600">
                        <p className="text-gray-600 dark:text-gray-100">
                            "The courses are amazing! Helped me crack my dream job."
                        </p>
                        <h4 className="mt-4 font-bold">- John Doe</h4>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded w-80 dark:bg-gray-600">
                        <p className="text-gray-600 dark:text-gray-100">
                            "Great instructors and well-structured material!"
                        </p>
                        <h4 className="mt-4 font-bold">- Jane Smith</h4>
                    </div>
                </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 text-center dark:from-gray-600 dark:to-gray-400">
                <h2 className="text-3xl font-bold mb-6">Start Your Journey Today!</h2>
                <Link to="/courses" className="mt-6 bg-white text-blue-500 px-6 py-2 rounded hover:bg-gray-200 dark:text-gray-500">
                    Explore Courses
                </Link>
            </div>
        </div>
    );
};

export default Home;
