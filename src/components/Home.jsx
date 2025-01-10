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
                <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
                <div className="relative overflow-hidden">
                    <div
                        className="flex gap-8 animate-scroll-testimonials"
                        style={{
                            display: "flex",
                            animation: "scroll 20s linear infinite",
                        }}
                    >
                        {[
                            { text: "Placement buddies started to read our requirements.", author: "Ishani Dhar" },
                            { text: "Watched your video for my interview And I have been selected. Thank you", author: "Eren" },
                            { text: "Both of you have presented the details in a very good manner with facts and details with openness. Well done", author: "Krishna Bhat" },
                            { text: "The most wonderful video which gave me a proper guidance from starting for I&t preparation to craking interview and to know about work procedure .I am very much thankful to you for bringing such a unique content.", author: "Pratik Saha" },
                            { text: "This is one of the best experiences being shared. The way things are explained by Tiash is so crisp and to the point, even a beginner with little knowledge about the profiles of ZS can get an idea of how to start with. Great work Placement Buddies team for showcasing some great talents of NIT Agartala :)", author: "Anshu Sinha" },
                            { text: "ONE OF THE BEST INTERVIEW I HAVE WATCHED TILL NOW. THE INTERVIEWER ASKED VERY GOOD QUESTIONS AND THE INTERVIEWEE GAVE VERY GOOD ANSWERS WHICH HELPS A LOT OF STUDENTS", author: "Shivam Chauhan" },
                            { text: "Bhai.....This Video has proved to be so much useful for me as i had my Interview for GET post at L&T construction today only from Mechanical and i performed very well by taking the tips from you two.... Thank u so.much for bringing this experience video...", author: "Saurabh Kumar" },
                            { text: "After watching videos from Placement Buddies to prepare for my interviews, to actually sharing my own experience here, it's been my pleasure to participate. I'm hoping this video helps at least some of you out there to prepare! My best wishes to all viewers, may your interviews be successful :)", author: "Sreelakshmy Sivadas" },
                            { text: "Thank you so much bhaiya for such a great advice and especially for my question's response", author: "Gaurav Kumar" },
                            { text: "Great topics to discuss. Really helpful for freshers", author: "Subhrajit Deb" },
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md p-6 rounded w-80 dark:bg-gray-600 flex-shrink-0"
                            >
                                <p className="text-gray-600 dark:text-gray-100">
                                    "{testimonial.text}"
                                </p>
                                <h4 className="mt-4 font-bold">- {testimonial.author}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Keyframes for animation */}
                <style>{`
                     @keyframes scroll {
                     0% { transform: translateX(0); }
                     100% { transform: translateX(-100%); }
                     }
                `}</style>
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
