
export interface HtagProps extends React.HTMLAttributes<HTMLHeadingElement> {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children: React.ReactNode;
} 