import { Section } from "@/layouts/Section";
import ContactForm from "./ContactForm";

export const Contacto: React.FC = () => {
  return (
    <Section isDark>
      <h2 className="text-4xl font-bold">Contáctanos</h2>
      <p className="text-[#4D4C4D] dark:text-[#C6C6C6]">
        Es posible contactarnos si tiene cualquier consulta que hacernos. Ingrese aquí su mensaje y le contestaremos lo más pronto posible.
      </p>

      <div className="flex justify-center mx-8 mt-8">
        <ContactForm />
      </div>
    </Section>
  );
};
