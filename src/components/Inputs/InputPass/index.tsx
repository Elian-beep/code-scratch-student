import React, { useState } from 'react';
import { DivContainer, DivContent, InputField, LabelInput, ButtonEye } from 'components/Inputs/styledInput';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IInput } from 'interfaces/IInput'; 
import { useTheme } from 'ThemeProvider';

export const InputPass: React.FC<IInput> = ({ onTextChange, textLabel }) => {
    const { isDarkMode } = useTheme();
    const [inputValue, setInputValue] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (event: any) => {
        const value = event.target.value;
        setInputValue(value);
        onTextChange(value); // Chama a função do componente pai
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    
    const iconEye = !showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />
    const typeInput = showPassword ? 'text' : 'password';

    return (
        <>
            <DivContainer>
                <DivContent>
                    <InputField isDark={isDarkMode} hasValue={inputValue} onChange={handleInputChange} type={typeInput} />
                    <LabelInput hasValue={inputValue}>{textLabel}</LabelInput>
                    <ButtonEye showPassword={showPassword} onClick={handleShowPassword} type='button'>
                        {iconEye}
                    </ButtonEye>
                </DivContent>
            </DivContainer>
        </>
    )
}