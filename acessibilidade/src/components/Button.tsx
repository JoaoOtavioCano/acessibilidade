import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
  "inline-flex rounded-full font-semibold py-5 items-center justify-center",
  {
    variants: {
      variant: {
        primary: "bg-educk text-white hover:bg-educkdark transition",
        ghost: "border-cinza border-2 bg-white hover:bg-claro transition",
        destructive: "bg-red-500 text-claro hover:bg-red-400 transition",
      },
      size: {
        default: "py-2 px-4",
        sm: "py-1.5 px-3",
        lg: "py-2.5 px-8",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  key?: React.Key;
}

const Button = ({ children, className, variant, size, ...props }) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </button>
  );
};

export default Button;
