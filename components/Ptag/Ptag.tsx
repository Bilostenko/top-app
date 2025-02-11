import style from "./Ptag.module.css";
import { PtagProps } from "./Ptag.props";
import cn from "classnames";

export const Ptag = ({
  size = "small",
  children,
  className,
  ...props
}: PtagProps) => {
  return (
    <p
      className={cn(className, {
        [style.small]: size === "small",
        [style.medium]: size === "medium",
        [style.large]: size === "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
