import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  titleClassName,
  descriptionClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento transition-all duration-300",
        "bg-white border border-slate-200",
        "hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/30",
        "overflow-hidden flex flex-col justify-between p-4 space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div
          className={cn(
            "font-sans font-bold text-slate-800 mb-2 mt-2",
            titleClassName
          )}
        >
          {title}
        </div>
        <div
          className={cn(
            "font-sans font-normal text-slate-600 text-xs",
            descriptionClassName
          )}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
