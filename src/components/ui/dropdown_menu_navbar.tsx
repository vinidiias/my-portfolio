import { Button } from "./button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown_menu"
import { Menu } from "lucide-react";

interface redirectProps {
  event: Event
  id: string
}

const redirect = ({ event, id }: redirectProps) => {
  event.preventDefault(); // impede comportamento padrão do item
  setTimeout(() => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  }, 100); // tempo suficiente pro dropdown fechar antes do scroll
}

const options = [
  { label: 'Sobre mim', id: 'about' },
  { label: 'Experiências', id: 'experiences' },
  { label: 'Tecnologias', id: 'technologies' },
  { label: 'Projetos', id: 'projects' },
]

export const DropdownMenuNavbar: React.FC = () => {
    return (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <Button type="button" variant="outline"><Menu /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-35">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {options.map((op, index) => (
              <DropdownMenuItem key={index} onSelect={(e) => redirect({ event: e, id: op.id })}>
                <span>{op.label}</span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem>
              <span>Contate-me</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
}