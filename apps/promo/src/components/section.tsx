import { cn } from "@/lib/utils";

export const Section = ({
  children,
  className,
  ...rest
}: React.ComponentProps<"section">) => (
  <section className={cn("pb-10 pt-20", className)} {...rest}>
    {children}
  </section>
);
