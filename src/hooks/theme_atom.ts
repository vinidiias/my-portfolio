import { atom } from "jotai"
 
export type Theme = "dark" | "light" | "system"

const storageKey = 'vite-ui-theme'

const getInitialTheme = (): Theme => {
  if(typeof window === "undefined") return "dark"
  return (localStorage.getItem(storageKey) as Theme) || "dark"
}

export const themeAtom = atom<Theme>(getInitialTheme())

export const setThemeAtom = atom(null, (_, set, newTheme: Theme) => {
  localStorage.setItem(storageKey, newTheme)
  set(themeAtom, newTheme)
})