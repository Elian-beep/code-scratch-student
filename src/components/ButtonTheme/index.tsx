import { useTheme } from 'ThemeProvider';
import { Button } from './styledButtonTheme';
import { LightMode, DarkMode } from '@mui/icons-material';

interface Props {
  colorDark: string;
  colorLight: string;
}

export const ButtonTheme: React.FC<Props> = ({colorDark, colorLight}) => {
  const { toggleDarkMode, isDarkMode } = useTheme();
  // const iconButton = !isDarkMode ? 'LightMode' : 'DarkMode';

  return (
    <Button colorDark={colorLight} colorLight={colorDark} isDark={isDarkMode} onClick={toggleDarkMode}>
      { !isDarkMode ? <DarkMode fontSize='large' /> : <LightMode fontSize='large' /> }
    </Button>
  )
}