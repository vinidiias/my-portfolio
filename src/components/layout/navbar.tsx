import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import logoBlack from '../../assets/logo_black.png'
import logoWhite from '../../assets/logo_white.png'
import { useTheme } from "@/hooks/useTheme";
import { DropdownMenuNavbar } from "../ui/dropdown_menu_navbar";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

export const Navbar = () => {
    const { theme, setTheme } = useTheme()
    return (
      <Menubar className="bg-blue justify-end p-6 py-7 shadow-none border-b border-b-0 border-b-skill rounded-none">
        <div className="flex-1">
          <img
            src={theme === "dark" ? logoWhite : logoBlack}
            alt=""
            className="min-w-25 w-25"
          />
        </div>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
        <MenubarMenu>
          <DropdownMenuNavbar />
        </MenubarMenu>
      </Menubar>
    );
}