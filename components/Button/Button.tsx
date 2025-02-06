import { ButtonProps } from "./Button.props";
import style from "./Button.module.css";
import cn from "classnames";

import Image from "next/image";

export const Button = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(style.button, className, {
        [style.primary]: appearance === "primary",
        [style.secondary]: appearance === "secondary",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span className={cn(style.arrow, { [style.down]: arrow === "down" })}>
          <Image src="/arrow.svg" alt="arrow" width={16} height={16} />
        </span>
      )}
    </button>
  );
};
