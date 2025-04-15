import { themeAtom } from "@/hooks/theme_atom";
import { useAtom } from "jotai";
import { ReactNode, useEffect } from "react";

export function ThemeProvider ({ children }: { children: ReactNode }) {
    const [theme] = useAtom(themeAtom)

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")

        if(theme === 'system') {
            const systemTheme = window.matchMedia(
              "(prefers-color-scheme: dark)"
            ).matches
              ? "dark"
              : "light";
              root.classList.add(systemTheme)
        } else {
            root.classList.add(theme)
        }
    }, [theme])

    return <>{children}</>
}