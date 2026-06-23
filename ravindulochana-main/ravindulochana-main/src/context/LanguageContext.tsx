import { createContext, useContext, useState, type ReactNode } from 'react';

type Lang = 'en' | 'si';

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const toggle = () => setLang((prev) => (prev === 'en' ? 'si' : 'en'));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

interface BProps {
  en: string;
  si: string;
}

export function B({ en, si }: BProps) {
  const { lang } = useLang();
  return <>{lang === 'en' ? en : si}</>;
}
