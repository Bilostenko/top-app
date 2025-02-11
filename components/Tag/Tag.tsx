import style from "./Tag.module.css";
import { TagProps } from "./Tag.props";
import cn from "classnames";

export const Tag = ({
  size = "small",
  color = "ghost",
  children,
  className,
  href,
  ...props
}: TagProps) => {
  return (
    // <p
    //   className={cn(className, {
    //     [style.small]: size === "small",
    //     [style.medium]: size === "medium",
    //     [style.ghost]: color === "ghost",
    //     [style.red]: color === "red",
    //     [style.gray]: color === "grey",
    //     [style.green]: color === "green",
    //     [style.primary]: color === "primary",
    //   })}
    //   {...props}
    // >
    //   {children}
    // </p>
    <div
      className={cn(style.tag, className, style[size], style[color])}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
