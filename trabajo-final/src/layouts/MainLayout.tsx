import ButtonUp from "@/components/ButtonUp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

interface MainLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ButtonUp />
    </>
  );
};
