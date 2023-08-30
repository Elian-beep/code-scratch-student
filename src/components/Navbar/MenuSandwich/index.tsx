import { ButtonTheme } from "components/ButtonTheme"
import { color } from "styles/colors"
import { LogoScratch } from "components/LogoScratch"
import { ReactComponent as ProfileGirlSVG } from 'assets/profile/profile_girl.svg'
import { ButtonSandwich } from "./styledMenuSandwich"
import { MoreVert } from "@mui/icons-material"

export const MenuSandwich: React.FC = () => {

    return (
        <ButtonSandwich>
            <MoreVert fontSize="large" />
        </ButtonSandwich>
    )
}