import { useAtom } from "jotai";
import { Footer } from "./components/layout/footer";
import { Navbar } from "./components/layout/navbar";
import { Separator } from "./components/ui/separator";
import { Home } from "./pages/home";
import { IntlProvider } from 'react-intl'
import { localeAtom } from "./hooks/locale";
import pt_json from './i18n/pt.json'
import en_json from './i18n/en.json'
import { Messages } from "./types/i18n";
import { Language } from "./types/i18n";

const messagesLocale: Record<Language, Messages> = {
  pt: pt_json,
  en: en_json
}

function App() {
  const [lang] = useAtom<Language>(localeAtom)
  console.log(lang)

  return (
    <IntlProvider messages={messagesLocale[lang]} locale={lang} defaultLocale="pt">
      <div className="flex flex-col bg-blue w-full h-screen overflow-x-hidden">
        <Navbar />
        <Separator />
        <Home />
        <Separator />
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App
