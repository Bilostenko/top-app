import style from "./Rating.module.css";
import { RatingProps } from "./Rating.props";
import cn from "classnames";
import { useState, useEffect, ReactElement } from "react";

import dynamic from "next/dynamic";
const Star = dynamic(() => import("lucide-react").then((mod) => mod.Star), {
  ssr: false, // Вимикає рендеринг на сервері
});
// setRating
// isEditable
export const Rating = ({ rating, ...props }: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<ReactElement[]>(
    new Array(5).fill(<></>)
  );

  const constructRating = (currentRating: number) => {
    const updatedArray = new Array(5).fill(null).map((_, i) => (
      <Star
        key={i}
        className={cn(style.star, {
          [style.filled]: i < currentRating,
        })}
        size={24}
      />
    ));
    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div className={style.starContainer} {...props}>
      {ratingArray.map((star, i) => (
        <span key={i}>{star}</span>
      ))}
    </div>
  );
};
