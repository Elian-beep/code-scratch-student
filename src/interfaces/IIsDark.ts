export interface PropsIsDark {
    isDark?: boolean;
}

export interface PropsIsOpen extends PropsIsDark{
    isOpen: boolean;
}

export interface PropsMultiColor extends PropsIsDark {
    colorLight: string;
    colorDark: string;
}