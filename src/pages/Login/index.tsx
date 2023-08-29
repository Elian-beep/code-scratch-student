import { ButtonTheme } from "components/ButtonTheme"
import { DivContainer, DivHeader, DivContent, FormLogin, PTitle } from './styledLogin';
import { useTheme } from "ThemeProvider";
import { color } from "styles/colors";
import { LogoScratch } from "components/LogoScratch";
import { useState } from "react";
import { InputNoIcon } from "components/Inputs/InputNoIcon";
import { InputPass } from "components/Inputs/InputPass";
import { ButtonSubmit } from "components/Inputs/styledInput";

export const Login: React.FC = () => {
    const { isDarkMode } = useTheme();

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    
    const handleinputEmailChange = (newText: string) => {
        setInputEmail(newText);
    };

    const handleinputPasswordChange = (newText: string) => {
        setInputPassword(newText);
    };

    const SubmitAuth = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputEmail);
        console.log(inputPassword);
    }

    return (
        <DivContainer isDark={isDarkMode}>
            <DivHeader>
                <ButtonTheme colorDark={color.dark.black_dark} colorLight={color.pattern.orange} />
            </DivHeader>
            <DivContent>
                <LogoScratch />
                <FormLogin onSubmit={SubmitAuth} isDark={isDarkMode}>
                    <PTitle>Insira seus dados para entrar</PTitle>
                    <InputNoIcon typeInput="email" textLabel="E-mail" onTextChange={handleinputEmailChange} />
                    <InputPass textLabel="Senha" onTextChange={handleinputPasswordChange} />
                    <ButtonSubmit type="submit">Entrar</ButtonSubmit>
                </FormLogin>
            </DivContent>
        </DivContainer>
    );
}