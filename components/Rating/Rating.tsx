import style from "./Rating.module.css";
import { RatingProps } from "./Rating.props";
import cn from "classnames";
import { useState, useEffect, ReactElement } from "react";

import dynamic from "next/dynamic";
const Star = dynamic(() => import("lucide-react").then((mod) => mod.Star), {
  ssr: false, // Вимикає рендеринг на сервері
});

export const Rating = ({
  rating,
  isEditable,
  setRating,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<ReactElement[]>([]);

  useEffect(() => {
    setRatingArray(constructRating(rating));
  }, [rating]);

  const constructRating = (currentRating: number) => {
    return new Array(5).fill(null).map((_, i) => (
      <Star
        key={i}
        className={cn(style.star, {
          [style.filled]: i < currentRating,
          [style.editable]: isEditable,
        })}
        size={24}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => click(i + 1)}
      />
    ));
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    setRatingArray(constructRating(i));
  };

  const click = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  return (
    <div className={style.starContainer} {...props}>
      {ratingArray.map((star, i) => (
        <span key={i}>{star}</span>
      ))}
    </div>
  );
};
