import React from "react";

const courses = [
  {
    title: "ReactJS Masterclass",
    description: "Master React and build scalable web applications.",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URLs
    duration: "8 weeks",
  },
  {
    title: "Java Fullstack Bootcamp",
    description: "Learn full-stack development with Java and React.",
    image: "https://via.placeholder.com/300x200",
    duration: "10 weeks",
  },
  {
    title: "DSA Essentials",
    description: "Prepare for placements with Data Structures & Algorithms.",
    image: "https://via.placeholder.com/300x200",
    duration: "6 weeks",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-4 md:px-16">
        <h1 className="text-4xl font-bold text-center mb-4">Explore Our Courses</h1>
        <p className="text-center text-lg max-w-2xl mx-auto">
          Gain in-demand skills with our expert-led courses tailored to your placement goals.
        </p>
      </div>

      {/* Featured Course Section */}
      <div className="py-16 px-4 md:px-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Featured Course: Java Fullstack Bootcamp
            </h2>
            <p className="text-gray-600 mb-4">
              A comprehensive course designed to make you a proficient full-stack developer with Java, React, and modern tools.
            </p>
            <p className="text-gray-600 mb-6">Duration: 10 weeks</p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Learn More
            </a>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/500x300"
              alt="Java Fullstack Bootcamp"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="py-16 px-4 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Top Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mt-2">{course.description}</p>
                <p className="text-gray-500 mt-4">Duration: {course.duration}</p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Course
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 md:px-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-lg mb-8">
          Join thousands of learners and accelerate your career growth today.
        </p>
        <a
          href="#"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Courses;
