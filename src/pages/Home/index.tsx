import React from "react";
import { Accordion } from "components/Accordion";
import { useCategory } from "CategoryProvider";
import { DivAccordion, DivProgressBar } from "./styledHome";
import { ProgressBar } from "components/ProgressBar";

export const Home: React.FC = () => {
  const { categories } = useCategory();

  return (
    <>
    <DivProgressBar>
        <ProgressBar />
    </DivProgressBar>
      <DivAccordion>
        {categories.map(item => <Accordion description={item.description} id={item.id} />)}
      </DivAccordion>
    </>
  );
}