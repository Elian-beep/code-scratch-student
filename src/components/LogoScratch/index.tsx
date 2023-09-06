import { useEffect, useState } from 'react';
import { ReactComponent as LogoScratchSvg } from 'assets/logo/logoCodeScratch.svg';
import { screens } from "styles/breackpoints";

interface Props {
    sizeMobile: number;
    sizeDesktop: number;
}

export const LogoScratch: React.FC<Props> = ({ sizeMobile, sizeDesktop }) => {

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

    const widthLogo = windowWidth > screens.desktop ? sizeDesktop : sizeMobile;
    const heghtLogo = windowWidth > screens.desktop ? sizeDesktop : sizeMobile;

    return (
        <LogoScratchSvg height={heghtLogo} width={widthLogo} />
    );
}