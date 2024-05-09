import { useState } from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { SendIcon } from "@/icons/SendIcon";
import { ValidationError, useForm } from "@formspree/react";
import { cls } from "@/utils/Tailwind";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xleqvepb");

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center w-full gap-4 h-[382px]">
        <h2 className="text-2xl font-bold text-center text-[#645CD9] dark:text-[#938FF6]">
          ¡Gracias por tu mensaje!
        </h2>
        <p
          className={cls(
            typeof state === "string" ? "flex" : "text-center",
            "text-[#4D4C4D] dark:text-[#C6C6C6]"
          )}
        >
          Nos pondremos en contacto contigo lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col items-center w-full sm:w-1/2 gap-4"
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        label="Nombre"
        placeholder="Introduce tu nombre"
        variant="bordered"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        label="Apellidos"
        placeholder="Introduce tus apellidos"
        variant="bordered"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        id="email"
        type="email"
        name="email"
        label="Email"
        placeholder="Introduce tu email"
        errorMessage="Por favor, introduce una dirección de correo válida."
        variant="bordered"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <Textarea
        id="message"
        name="message"
        label="Mensaje"
        placeholder="Ingrese su mensaje aquí"
        variant="bordered"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button
        color="primary"
        endContent={<SendIcon />}
        type="submit"
        isDisabled={
          state.submitting || !email || !message || !name || !lastName
        }
        isLoading={state.submitting}
      >
        Enviar
      </Button>
    </form>
  );
};

export default ContactForm;
