import { cn } from "@/lib/utils";

export const Card = ({
  children,
  className,
  ...rest
}: React.ComponentProps<"div">) => (
  <div className={cn("bg-white px-6 py-7", className)} {...rest}>
    {children}
  </div>
);
