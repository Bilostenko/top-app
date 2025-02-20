import { FooterProps } from "./Footer.props";
import style from "./Footer.module.css";
import cn from "classnames";

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(style.footer, className)} {...props}>
      <div className={style.wrapper}>
        <p className={style.leftElement}>
          OwlTop © 2020 - 2025 All rights are reserved
        </p>
        <a href="#" className={style.rightElement}>
          {" "}
          User Agreement
        </a>
        <a href="#" className={style.rightElement}>
          {" "}
          Privacy policy
        </a>
      </div>
    </footer>
  );
};
