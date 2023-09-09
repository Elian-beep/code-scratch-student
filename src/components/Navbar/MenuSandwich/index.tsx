import { ButtonTheme } from "components/ButtonTheme"
import { color } from "styles/colors"
import { LogoScratch } from "components/LogoScratch"
import { ReactComponent as ProfileGirlSVG } from 'assets/profile/profile_girl.svg'
import { ButtonSandwich, DivContainer, DivItensContainer } from "./styledMenuSandwich"
import { BorderAll, MoreVert } from "@mui/icons-material"
import { Itens } from "./Itens"
import { useState } from "react"
import { useTheme } from "ThemeProvider"

export const MenuSandwich: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    const { isDarkMode } = useTheme();

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <DivContainer>
            <ButtonSandwich onClick={handleShowMenu} >
                <MoreVert fontSize="large" />
            </ButtonSandwich>
            <DivItensContainer isDark={isDarkMode} valueDisplay={showMenu}>
                <Itens closeMenu={() => setShowMenu(!showMenu)} />
            </DivItensContainer>
        </DivContainer>
    )
}