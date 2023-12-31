import { ButtonTheme } from "components/ButtonTheme"
import { ButtonProfile, DivContent, DivLeft, DivRight, HeaderContainer, ImgProfile } from "./styledHeader"
import { color } from "styles/colors"
import { LogoScratch } from "components/LogoScratch"
import { ReactComponent as ProfileGirlSVG } from 'assets/profile/profile_girl.svg'
import { Navbar } from "components/Navbar"
import { useNavigate } from "react-router-dom"
import { PictureProfile } from "./PictureProfile"

export const Header: React.FC = () => {
    const navigate = useNavigate();
    const photoStudent = localStorage.getItem('photo');

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
                            <PictureProfile />
                        </ButtonProfile>
                        <Navbar />
                    </DivRight>
            </DivContent>
        </HeaderContainer>
    )
}