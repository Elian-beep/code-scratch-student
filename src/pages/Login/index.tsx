import { ButtonTheme } from "../../components/ButtonTheme"
import { DivContainer, ImgLogoScratch } from './styledLogin';
import { useTheme } from "../../ThemeProvider";
import {ReactComponent as LogoScratch} from '../../assets/logo/logoCodeScratch.svg';
import { color } from "../../styles/colors";

export const Login: React.FC = () => {
    const { isDarkMode } = useTheme();

    return (
        <DivContainer isDark={isDarkMode}>
            <LogoScratch />
            <ButtonTheme colorDark={color.light.white} colorLight={color.pattern.orange} /> 
        </DivContainer>
    );
}