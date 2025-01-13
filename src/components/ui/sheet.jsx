import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef((props, ref) => {
  const { className, ...otherProps } = props;
  return (
    <SheetPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...otherProps}
      ref={ref}
    />
  );
});
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-purple-400 p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out dark:bg-zinc-950",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

const SheetContent = React.forwardRef((props, ref) => {
  const { side = "left", className, children, ...otherProps } = props;
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(sheetVariants({ side }), className)}
        {...otherProps}
      >
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:data-[state=open]:bg-zinc-800">
          <X className="h-6 w-6 text-white"/>
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
        {children}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
});
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = (props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
      {...otherProps}
    />
  );
};
SheetHeader.displayName = "SheetHeader";

const SheetFooter = (props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...otherProps}
    />
  );
};
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef((props, ref) => {
  const { className, ...otherProps } = props;
  return (
    <SheetPrimitive.Title
      ref={ref}
      className={cn("text-lg font-semibold text-zinc-950 dark:text-zinc-50", className)}
      {...otherProps}
    />
  );
});
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef((props, ref) => {
  const { className, ...otherProps } = props;
  return (
    <SheetPrimitive.Description
      ref={ref}
      className={cn("text-sm text-zinc-500 dark:text-zinc-400", className)}
      {...otherProps}
    />
  );
});
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
