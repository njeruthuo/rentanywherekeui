import React from "react";
import { ButtonProps } from ".";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SubmitButton: React.FC<ButtonProps> = ({
  className,
  clickHandler,
  children,
  loading,
}) => {
  return (
    <Button
      onClick={clickHandler}
      disabled={loading}
      type="submit"
      className={cn(
        `bg-green-500 hover:bg-green-600 disabled:bg-green-300 disabled:cursor-not-allowed w-full ${className}`
      )}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
