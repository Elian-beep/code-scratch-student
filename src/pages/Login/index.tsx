import { ButtonTheme } from "components/ButtonTheme"
import { DivContainer, DivHeader, DivContent, FormLogin, PTitle } from './styledLogin';
import { useTheme } from "ThemeProvider";
import { color } from "styles/colors";
import { LogoScratch } from "components/LogoScratch";
import { useState } from "react";
import { InputNoIcon } from "components/Inputs/InputNoIcon";
import { InputPass } from "components/Inputs/InputPass";
import { ButtonSubmit } from "components/Inputs/styledInput";
import { useNavigate } from "react-router-dom";
import { authStudent } from "services/endpoints";
import { useToken } from "TokenProvider";
import { Alert } from "components/Alert";

export const Login: React.FC = () => {
    const { isDarkMode } = useTheme();
    const { addToken } = useToken();
    const navigate = useNavigate();

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleinputEmailChange = (newText: string) => setInputEmail(newText);
    const handleinputPasswordChange = (newText: string) => setInputPassword(newText);

    const SubmitAuth = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const { token, student } = await authStudent(inputEmail, inputPassword);
            if (!token) {
                navigate("/l")
            } else {
                localStorage.setItem('token', token);
                localStorage.setItem('student', student.id);
                addToken(token);
                navigate("/");
            }

        } catch (error) {
            console.log(error);
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 5000);
        }
    }


    return (
        <DivContainer isDark={isDarkMode}>
            {
                showAlert &&
                <Alert show={showAlert} onClose={() => setShowAlert(false)} text="Informações de login incorretas. Tente novamente." />
            }
            <DivHeader>
                <ButtonTheme colorDark={color.dark.black_dark} colorLight={color.pattern.orange} />
            </DivHeader>
            <DivContent>
                <LogoScratch sizeMobile={110} sizeDesktop={200} />
                <FormLogin onSubmit={SubmitAuth} isDark={isDarkMode}>
                    <PTitle isDark={isDarkMode} >Insira seus dados para entrar</PTitle>
                    <InputNoIcon typeInput="text" textLabel="Usuário" onTextChange={handleinputEmailChange} />
                    <InputPass textLabel="Senha" onTextChange={handleinputPasswordChange} />
                    <ButtonSubmit type="submit">Entrar</ButtonSubmit>
                </FormLogin>
            </DivContent>
        </DivContainer>
    );
}