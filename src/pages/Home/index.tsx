import React from "react";
import { Accordion } from "components/Accordion";
import { useCategory } from "CategoryProvider";
import { DivAccordion } from "./styledHome";

export const Home: React.FC = () => {
  const { categories } = useCategory();

  return (
    <DivAccordion>
      {categories.map(item => <Accordion description={item.description} id={item.id} />)}
    </DivAccordion>
  );
}