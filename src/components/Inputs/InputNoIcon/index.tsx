import React, { useState } from 'react';
import { DivContainer, InputField, LabelInput, DivContent } from 'components/Inputs/styledInput';
import { IInputType } from 'interfaces/IInput';
import { useTheme } from 'ThemeProvider';

export const InputNoIcon: React.FC<IInputType> = ({ onTextChange, textLabel, typeInput }) => {
    const [inputValue, setInputValue] = useState('');
    const { isDarkMode } = useTheme();

    const handleInputChange = (event: any) => {
        const value = event.target.value;
        setInputValue(value);
        onTextChange(value); // Chama a função do componente pai
    };

    return (
        <>
            <DivContainer>
                <DivContent>
                    <InputField isDark={isDarkMode} hasValue={inputValue} value={inputValue} onChange={handleInputChange} type={typeInput}></InputField>
                    <LabelInput hasValue={inputValue} >{textLabel}</LabelInput>
                </DivContent>
            </DivContainer>
        </>
    )
}