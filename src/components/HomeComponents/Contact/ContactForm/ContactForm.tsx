import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import validate from "@/helpers/validateContact";
import { IFormContact } from "@/interfaces/IFormContact";
import { contact } from "@/services/Users/Contact.Service";
import useSuccessAlert from "@/hooks/useSuccessAlert";
import useErrorAlert from "@/hooks/useErrorAlert";

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const showSuccessAlert = useSuccessAlert();
  const showErrorAlert = useErrorAlert();

  const handleFormContact = async (values: IFormContact) => {
    setIsLoading(true);
    try {
      await contact(values);
      showSuccessAlert(
        "¡Mensaje enviado con éxito!",
        "En breve recibirás una respuesta."
      );
    } catch {
      showErrorAlert(
        "Error al enviar el mensaje",
        "Inténtalo de nuevo más tarde."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        subject: "",
        from: "",
        message: "",
      }}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        handleFormContact(values);
        resetForm();
      }}
    >
      {() => (
        <>
          <Form className="relative">
            <div className="relative transition-all">
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <Field
                  type="text"
                  name="subject"
                  placeholder="Nombre..."
                  className="inputForm"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500"
                />
              </motion.div>

              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <Field
                  type="text"
                  name="from"
                  placeholder="Correo electrónico..."
                  className="inputForm"
                />
                <ErrorMessage
                  name="from"
                  component="div"
                  className="text-red-500"
                />
              </motion.div>

              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Mensaje..."
                  className="inputForm min-h-[150px] resize-none"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="group relative flex items-center justify-start w-[80%] h-[30px] mx-auto bg-sc rounded-full overflow-hidden transition-all duration-300 pr-4 py-2 sm:h-[36px] lg:h-[40px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <span
                  className={`absolute left-0 w-10 h-10 p-2 bg-pcPrincipal rounded-full flex items-center justify-end transition-all duration-300 group-hover:w-full ${
                    isLoading && "w-full"
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>

                <span
                  className="absolute right-[100%] text-white text-sm font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-10"
                  style={isLoading ? { right: 40, opacity: 1 } : {}}
                >
                  {isLoading ? "Procesando..." : "Enviar"}
                </span>
              </motion.button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default ContactForm;
