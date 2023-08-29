import { useEffect, useState } from 'react';
import { ReactComponent as LogoScratchSvg } from 'assets/logo/logoCodeScratch.svg';
import { screens } from "styles/breackpoints";


export const LogoScratch: React.FC = () => {

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

    const widthLogo = windowWidth > screens.desktop ? 200 : 130;
    const heghtLogo = windowWidth > screens.desktop ? 200 : 130;

    return (
        <LogoScratchSvg height={heghtLogo} width={widthLogo} />
    );
}