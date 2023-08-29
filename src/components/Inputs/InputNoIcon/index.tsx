import React, { useState } from 'react';
import { DivContainer, InputField, LabelInput, DivContent } from 'components/Inputs/styledInput';
import { IInputType } from 'interfaces/IInput';

export const InputNoIcon: React.FC<IInputType> = ({ onTextChange, textLabel, typeInput }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: any) => {
        const value = event.target.value;
        setInputValue(value);
        onTextChange(value); // Chama a função do componente pai
    };

    return (
        <>
            <DivContainer>
                <DivContent>
                    <InputField hasValue={inputValue} value={inputValue} onChange={handleInputChange} type={typeInput}></InputField>
                    <LabelInput hasValue={inputValue} >{textLabel}</LabelInput>
                </DivContent>
            </DivContainer>
        </>
    )
}