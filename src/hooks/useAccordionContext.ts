import AccordionContext from "@/context/AccordionContext";
import { useContext } from "react";

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion components are compound component. Must be used inside Accordion."
    );
  }
  return context;
};

export default useAccordionContext;
