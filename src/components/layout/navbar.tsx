import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { CustomSelect } from "../ui/custom_select";
import logoBlack from '../../assets/logo_black.png'
import logoWhite from '../../assets/logo_white.png'
import { useTheme } from "@/hooks/useTheme";

export const Navbar = () => {
    const { theme } = useTheme()
    return (
      <Menubar className="bg-blue justify-end p-6 py-7 shadow-none border-b border-b-0 border-b-skill rounded-none">
        <div className="flex-1">
            <img src={theme === 'dark' ? logoWhite : logoBlack} alt="" className="min-w-25 w-25" />
        </div>
        <MenubarMenu>
          <MenubarTrigger>
            <a href="/a">Sobre Mim</a>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <a href="">Projetos</a>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <a href="">Contate-me</a>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Theme</MenubarTrigger>
          <MenubarContent className="w-[220px] p-3">
            <div className="space-y-2">
              <CustomSelect />
            </div>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
}