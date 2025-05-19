import { Button } from "./button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown_menu"
import br_flag from '../../assets/br-flag.svg';
import us_flag from '../../assets/us-flag.svg';
import { useIntl } from "react-intl";
import { useAtom } from "jotai";
import { Language } from "@/types/i18n";
import { localeAtom } from "@/hooks/locale";

export const DropdownTheme: React.FC = () => {
    const [lang, setLang] = useAtom<Language>(localeAtom);

    const intl = useIntl();

    return (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <Button type="button" variant="ghost">
            <img src={lang === 'en' ? us_flag : br_flag} alt="Language" />        
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setLang('pt')}>
              <img src={br_flag} alt="pt" />
              <span>{intl.formatMessage({ id: 'pt' })}</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLang('en')}>
              <img src={us_flag} alt="en" />
              <span>{intl.formatMessage({ id: 'en' })}</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
}