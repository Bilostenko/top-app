import { HeaderProps } from "./Header.props";

export const Header = ({ className, children, ...props }: HeaderProps) => {
  return (
    <header className={className} {...props}>
      {children || "Header_IN_COMPONENT"}
    </header>
  );
};
