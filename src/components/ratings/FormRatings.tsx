import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const FormRatings = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (newValue: number) => void;
}) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      <label>Rating:</label>
      <div className="flex pt-3">
        {stars.map((star) => (
          <span
            key={star}
            onClick={() => onChange(star)}
            style={{ cursor: "pointer" }}
            className="hover:text-yellow-300 text-4xl text-yellow-300"
          >
            {star <= value ? <AiFillStar /> : <AiOutlineStar />}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FormRatings;
