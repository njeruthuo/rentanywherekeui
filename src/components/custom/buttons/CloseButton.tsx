import React from "react";
import { ButtonProps } from ".";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CloseButton: React.FC<ButtonProps> = ({
  className,
  clickHandler,
  children,
}) => {
  return (
    <Button onClick={clickHandler} className={cn(`bg-gray-500 w-full ${className}`)}>
      {children}
    </Button>
  );
};

export default CloseButton;
