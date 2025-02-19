import { SidebarProps } from "./Sidebar.props";

export const Sidebar = ({ className, children, ...props }: SidebarProps) => {
  return (
    <div className={className} {...props}>
      {children || "Sidebar"}
    </div>
  );
};
