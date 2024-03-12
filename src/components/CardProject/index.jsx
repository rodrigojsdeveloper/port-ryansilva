import React from 'react';

const CardProject = () => {
  return (
    <div className="w-11/12 md:max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 relative">
      <div className="flex items-center justify-center">
        <div className="w-full md:w-1/2 p-4">
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-orange-500 to-red-500 shadow-lg rounded-lg transform -translate-x-20 md:translate-y-0 md:-translate-y-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 to-red-500 opacity-75 rounded-lg"></div>
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="text-gray-500">26 December 2019</div>
          <h2 className="text-2xl font-bold text-gray-800 mt-2 md:mt-0">Lorem Ipsum Dolor</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</p>
          <a href="#" className="block mt-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out hover:from-orange-600 hover:to-red-600">READ MORE</a>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
