import React, { createContext, useContext, useState } from 'react';
import { getAllCategories } from 'services/endpoints';
import { TCategory } from 'types/TCategory';

interface CategoryContextType {
    categories: TCategory[];
    addCategories: () => void;
}

interface Props {
    children: React.ReactNode;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider: React.FC<Props> = ({children}) => {
    const [categories, setCategories] = useState<TCategory[]>([]);
    const storedToken = localStorage.getItem('token');
  
    const addCategories = async () => {
      if(categories.length === 0){
        const res = await getAllCategories(storedToken);
        setCategories(res);
      }
    }
  
    return (
      <CategoryContext.Provider value={{ categories, addCategories }}>
        {children}
      </CategoryContext.Provider>
    );
  }

  export const useCategory = () => {
    const context = useContext(CategoryContext);
    if(!context){
      throw new Error('useCategory deve ser usado dentro de um CategoryProvider');
    }
    return context;
  }