// interface/index.ts

// From Button.tsx
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

// From pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// From Layout.tsx
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}
