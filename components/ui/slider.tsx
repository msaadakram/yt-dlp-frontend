"use client"
import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "./utils"

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & { defaultValue?: number[] }>(
  ({ className, defaultValue, value, min = 0, max = 100, ...props }, ref) => {
    const _values = React.useMemo(() => (Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min, max]), [value, defaultValue, min, max])
    return (
      <SliderPrimitive.Root ref={ref} min={min} max={max} value={value} defaultValue={defaultValue}
        className={cn("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", className)}
        {...props}
      >
        <SliderPrimitive.Track className="bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5">
          <SliderPrimitive.Range className="bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full" />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, i) => (
          <SliderPrimitive.Thumb key={i} className="border-primary/50 bg-background focus-visible:ring-ring block size-4 shrink-0 rounded-full border shadow-sm transition-colors focus-visible:ring-[3px] focus-visible:outline-hidden disabled:pointer-events-none" />
        ))}
      </SliderPrimitive.Root>
    )
  }
)
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
