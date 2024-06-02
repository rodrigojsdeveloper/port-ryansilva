import React from 'react';

const Button = ({ label, icon, link}) => {

  return (
    <>
      <a
        className="shadow-inner bg-gray-4 rounded-md border border-gray-3"
        href={link}
        target='_blank'
      >
        <div className='flex items-center gap-1 px-4 py-1 font-semibold text-white-primary'>
          <span>
            {icon}
          </span>
          <h1>{label}</h1>
        </div>
      </a>
    </>
  );
};

export default Button;
