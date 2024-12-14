import React from "react";

const courses = [
  {
    title: "Process Control",
    description: "One stop solution for Process Control.",
    image: "https://images.wevolver.com/eyJidWNrZXQiOiJ3ZXZvbHZlci1wcm9qZWN0LWltYWdlcyIsImtleSI6ImZyb2FsYS8xNzE4ODc4ODg1ODA2LUdEIFByb2Nlc3MgQ29udHJvbCBTeXN0ZW0uanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NTAsImZpdCI6ImNvdmVyIn19fQ==", // Replace with actual image URLs
    duration: "2 hours",
    src:"https://www.youtube.com/playlist?list=PLEd-6ZYEX_7dHVWadw7A_Jzpj3afHRIQD",
  },
  {
    title: "Interview Experience",
    description: "Gather Interview Experiences for your Dream Company",
    image: "https://www.shutterstock.com/image-vector/interview-icon-headhunting-symbol-template-260nw-1928172533.jpg",
    duration: "20 hours",
    src:"https://www.youtube.com/playlist?list=PLEd-6ZYEX_7fZWZU0ilnmUdkHTTiWc9u0",
  },
  {
    title: "Industrial Instrumentation",
    description: "Master Industrial Instrumentation for placements.",
    image: "https://nttinc.com/wp-content/uploads/2019/05/NTT-May-21.png",
    duration: "2 hours",
    src:"https://www.youtube.com/playlist?list=PLEd-6ZYEX_7c2EneBblviLVIRs0JbiI1G",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 px-4 md:px-16 dark:from-gray-600 dark:to-gray-400">
        <h1 className="text-4xl font-bold text-center mb-4">Explore Our Courses</h1>
        <p className="text-center text-lg max-w-2xl mx-auto">
          Gain in-demand skills with our expert-led courses tailored to your placement goals.
        </p>
      </div>

      {/* Featured Course Section */}
      <div className="py-16 px-4 md:px-16 bg-white dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">
              Featured Playlist: PB Podcast
            </h2>
            <p className="text-gray-600 mb-4 dark:text-gray-100">
              A comprehensive playlist designed to discuss about different topics with Industry Experts.
            </p>
            {/* <p className="text-gray-600 mb-6">Duration: 10 weeks</p> */}
            <a
              href="https://www.youtube.com/@PlacementBuddies/podcasts"
              target="_blank"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition dark:bg-gray-600 dark:hover:bg-gray-700"
            >
              Learn More
            </a>
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2023/03/25/20/30/podcast-7876792_640.jpg"
              alt="Java Fullstack Bootcamp"
              className="w-[500px] h-[300px] rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="py-16 px-4 md:px-16 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Our Top Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{course.title}</h3>
                <p className="text-gray-600 mt-2 dark:text-gray-50">{course.description}</p>
                <p className="text-gray-500 mt-4 dark:text-gray-100">Duration: {course.duration}</p>
                <a
                  href={course.src}
                  target="_blank"
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition dark:bg-gray-600 dark:hover:bg-gray-700"
                >
                  View Course
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 md:px-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center dark:from-gray-600 dark:to-gray-400">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-lg mb-8">
          Join thousands of learners and accelerate your career growth today.
        </p>
        <a
          href="#"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition dark:text-gray-600"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Courses;
