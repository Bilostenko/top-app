import { DetailedHTMLProps } from "react"

export interface PtagProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: React.ReactNode
    size: 'small' | 'medium' | 'large'
}