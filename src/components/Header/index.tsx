import { ButtonTheme } from "components/ButtonTheme"
import { ButtonProfile, DivContent, DivLeft, DivRight, HeaderContainer } from "./styledHeader"
import { color } from "styles/colors"
import { LogoScratch } from "components/LogoScratch"
import { ReactComponent as ProfileGirlSVG } from 'assets/profile/profile_girl.svg'
import { Navbar } from "components/Navbar"

export const Header: React.FC = () => {

    return (
        <HeaderContainer>
            <DivContent>
                    <DivLeft>
                        <LogoScratch sizeDesktop={180} sizeMobile={80} />
                    </DivLeft>
                    <DivRight>
                        <ButtonTheme colorDark={color.light.white} colorLight={color.pattern.orange} />
                        <ButtonProfile>
                            <ProfileGirlSVG />
                        </ButtonProfile>
                        <Navbar />
                    </DivRight>
            </DivContent>
        </HeaderContainer>
    )
}