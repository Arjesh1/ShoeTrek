import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const FormRatings = ({ value, onChange }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      <label>Rating:</label>
      <div className='flex '>
        {stars.map(star => (
          <span
            key={star}
            onClick={() => onChange(star)}
            style={{ cursor: 'pointer' }}
            className='hover:text-yellow-300 text-2xl text-yellow-300'
          >
            {star <= value ? <AiFillStar /> : <AiOutlineStar />}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FormRatings;