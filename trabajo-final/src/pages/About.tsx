import { MainLayout } from "@/layouts/MainLayout";
import { Hero } from "@/components/Hero";

export const About: React.FC = () => {
  return (
    <MainLayout>
      <Hero
        title="Lorem ipsum dolor sit amet, consectetur"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere nunc nec velit porta bibendum. Phasellus vehicula faucibus"
        button={false}
        input={false}
      />
    </MainLayout>
  );
};
