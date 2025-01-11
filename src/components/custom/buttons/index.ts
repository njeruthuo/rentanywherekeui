export type ButtonProps = {
  className?: string;
  clickHandler?: () => void;
  children: ReactNode;
  loading?:boolean
};

import { ReactNode } from "react";
import CloseButton from "./CloseButton";
import SubmitButton from "./SubmitButton";

export { CloseButton, SubmitButton };
