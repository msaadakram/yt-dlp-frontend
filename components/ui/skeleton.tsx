import { cn } from "./utils"

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("bg-accent/50 animate-pulse rounded-md", className)} {...props} />
  )
}

export { Skeleton }
