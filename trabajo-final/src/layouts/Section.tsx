import { cls } from "@/utils/Tailwind";

interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  isDark?: boolean;
  customResponsive?: boolean;
  childrenStyles?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  isDark = false,
  customResponsive = false,
  childrenStyles = "",
}: SectionProps) => (
  <section
    style={{
      minHeight: "calc(100vh - 64px)",
    }}
    className={cls(
      "flex flex-col justify-center py-10",
      isDark && "bg-[#EAEAF7] dark:bg-[#1E1E1E]"
    )}
  >
    <div
      className={cls(
        !customResponsive
          ? "px-responsive text-center md:text-left"
          : childrenStyles
      )}
    >
      {children}
    </div>
  </section>
);
