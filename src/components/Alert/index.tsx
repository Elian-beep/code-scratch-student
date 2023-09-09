import { ButtonClose, DivContainer, DivContent } from './styledAlert';
import CloseIcon from '@mui/icons-material/Close';

interface Props{
    text: string,
    show: boolean,
    onClose: () => void;
}

export const Alert: React.FC<Props> = ({text, onClose, show}) => {

    return (
        <DivContainer show={show}>
            <DivContent>
            {text}
            <ButtonClose onClick={onClose} >
                <CloseIcon />
            </ButtonClose>
            </DivContent>
        </DivContainer>
    );
}