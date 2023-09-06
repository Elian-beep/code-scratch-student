import React, { createContext, useContext, useEffect, useState } from 'react';

interface TokenContextType {
    token: string | null;
    addToken: (receivedToken: string) => void;
}

interface Props {
    children: React.ReactNode;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const TokenProvider: React.FC<Props> = ({ children }) => {
    const [token, setToken] = useState<string | null>(null);
    const [idade, setIdade] = useState<number>();

    const addToken = (receivedToken: string) => {
        if (receivedToken) {
            setToken(receivedToken);
        }
    }

    return (
        <TokenContext.Provider value={{ token, addToken }}>
            {children}
        </TokenContext.Provider>
    );
}

export const useToken = () => {
    const context = useContext(TokenContext);
    if (!context) {
        throw new Error('useToken deve ser usado dentro de um TokenProvider');
    }
    return context;
}