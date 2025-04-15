import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { CustomSelect } from "../ui/custom_select";

export const Navbar = () => {
    return (
      <Menubar className="bg-blue justify-end p-6 shadow-none border-b border-b-0 border-b-skill rounded-none">
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