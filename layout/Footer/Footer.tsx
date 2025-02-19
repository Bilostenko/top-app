import { FooterProps } from "./Footer.props";

export const Footer = ({ className, children, ...props }: FooterProps) => {
  return (
    <footer className={className} {...props}>
      {children || "Footer"}
    </footer>
  );
};
