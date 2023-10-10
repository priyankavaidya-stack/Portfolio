import { useContext, createContext } from 'react';


export const ThemeContext = createContext({
    themeMode: "light",
    dakTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}