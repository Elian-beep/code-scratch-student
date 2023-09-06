import { useToken } from 'TokenProvider';
import React, { createContext, useContext, useState } from 'react';
import { getAllCategories } from 'services/endpoints';
import { TCategory } from 'types/TCategory';

interface CategoryContextType {
    categories: TCategory[];
    addCategories: (token: string | null) => void;
}

interface Props {
    children: React.ReactNode;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider: React.FC<Props> = ({children}) => {
    const [categories, setCategories] = useState<TCategory[]>([]);
    // const { token } = useToken();
  
    const addCategories = async (token: string | null) => {
      if(categories.length === 0 && token){
        const res = await getAllCategories(token);
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