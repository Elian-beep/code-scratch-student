import { ButtonTheme } from "components/ButtonTheme"
import { color } from "styles/colors"
import { LogoScratch } from "components/LogoScratch"
import { ReactComponent as ProfileGirlSVG } from 'assets/profile/profile_girl.svg'
import { MenuSandwich } from "./MenuSandwich"
import { useEffect, useState } from "react"
import { screens } from "styles/breackpoints"
import { NavList } from "./NavList"

export const Navbar: React.FC = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const menu = windowWidth < screens.desktop ? <MenuSandwich /> : <NavList />

    return (
        <>
            {menu}
        </>
    )
}