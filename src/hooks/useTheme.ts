import { useAtom } from "jotai"
import { setThemeAtom, themeAtom } from "./theme_atom"

export const useTheme = () => {
    const [theme] = useAtom(themeAtom)
    const [, setTheme] = useAtom(setThemeAtom)

    return { theme, setTheme }
}