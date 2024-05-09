import { Section } from "@/layouts/Section";
import ContactForm from "./ContactForm";

export const Contacto: React.FC = () => {
  return (
    <Section isDark>
      <h2 className="text-4xl font-bold">Contáctanos</h2>
      <p className="text-[#4D4C4D] dark:text-[#C6C6C6]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        tenetur quaerat pariatur necessitatibus, aperiam exercitationem. Ab enim
        placeat voluptate, at corrupti necessitatibus reprehenderit tenetur
        officia!
      </p>

      <div className="flex justify-center mx-8 mt-8">
        <ContactForm />
      </div>
    </Section>
  );
};
