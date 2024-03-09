import React from 'react';

const RadioInput = ({ checked, onChange }) => {
  return (
    <div className="slideThree">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
        id="slide"
      />
      <label htmlFor="slide" className="label">
      </label>
    </div>
  );
};

export default RadioInput;
