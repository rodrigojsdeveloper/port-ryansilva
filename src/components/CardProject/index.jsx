import React from 'react';
import Button from '../Button';

const imageUrl = "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp";

const CardProject = () => {
  return (
    <div className="striped-background w-full mx-auto bg-white shadow-xl p-4 sm:p-8 rounded-lg mb-6">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="brighter-image w-full sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-black to-gray-300 shadow-md rounded-xl transform translate-x-0 sm:-translate-x-16 overflow-hidden relative my-4">
          <img src={imageUrl} alt="Nome do Projeto" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
        </div>
        <div className="w-full mt-4 sm:mt-0 sm:w-1/2 p-4">
          <h1 className="text-gray-800 text-lg font-light">26 dezembro de 2019</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">Lorem Ipsum Dolor</h2>
          <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</p>
          <div className="mt-6">
            <Button label={<span className='underline'>Ver detalhes</span>} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
