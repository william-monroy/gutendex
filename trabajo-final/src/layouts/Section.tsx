import { cls } from "@/utils/Tailwind";

interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  isDark?: boolean;
  className?: string | boolean | undefined;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  isDark = false,
}: SectionProps) => (
  <section
    style={{
      minHeight: "calc(100vh - 64px)",
    }}
    className={cls(
      "flex flex-col justify-center",
      isDark && "bg-[#EAEAF7] dark:bg-[#1E1E1E]",
      className
    )}
  >
    <div className="px-responsive">{children}</div>
  </section>
);