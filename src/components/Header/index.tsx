import { ButtonTheme } from "components/ButtonTheme"
import { ButtonProfile, DivContent, DivLeft, DivRight, HeaderContainer } from "./styledHeader"
import { color } from "styles/colors"
import { LogoScratch } from "components/LogoScratch"
import { ReactComponent as ProfileGirlSVG } from 'assets/profile/profile_girl.svg'
import { Navbar } from "components/Navbar"
import { useNavigate } from "react-router-dom"

export const Header: React.FC = () => {
    const navigate = useNavigate();

    const redirectPage = (route: string, id?: string) => {
        navigate(`/${route}`);
    }

    return (
        <HeaderContainer>
            <DivContent>
                    <DivLeft>
                        <LogoScratch sizeDesktop={100} sizeMobile={80} />
                    </DivLeft>
                    <DivRight>
                        <ButtonTheme colorDark={color.light.white} colorLight={color.pattern.orange} />
                        <ButtonProfile onClick={() => redirectPage('p')}  >
                            <ProfileGirlSVG />
                        </ButtonProfile>
                        <Navbar />
                    </DivRight>
            </DivContent>
        </HeaderContainer>
    )
}