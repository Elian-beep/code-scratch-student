import { ReactComponent as ProfileGirlSVG } from 'assets/profile/profile_girl.svg'
import { ImgProfile } from "./styledPictureProfile"
import React from 'react';

export const PictureProfile: React.FC = () => {
    const photoStudent = localStorage.getItem('photo');

    return (
        <>
            {
                photoStudent
                ? 
                (<ImgProfile src={photoStudent} alt="" />)
                :
                (React.cloneElement(<ProfileGirlSVG />, { 'data-testid': 'profile-girl-svg' }))
            }
        </>
    )
}