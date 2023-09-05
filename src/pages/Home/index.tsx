import React, { useState, useEffect } from "react";
import { useTheme } from "ThemeProvider";
import { Accordion } from "components/Accordion";
import { useCategory } from "CategoryProvider";
import { DivAccordion } from "./styledHome";

export const Home: React.FC = () => {

  const { isDarkMode } = useTheme();
  const { categories } = useCategory();

  return (
    <DivAccordion>
      {categories.map(item => <Accordion description={item.description} id={item.id} />)}
    </DivAccordion>
  );
}