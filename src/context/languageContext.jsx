import { useContext,createContext, useState } from "react";
import { translations } from "../translations/translations";

const LanguageContext = createContext();

export function LanguageProvider({children}){

    const [lang, setLang] = useState('pt')

    const t = (key) => translations[lang][key]

    const changeLanguage = (newLanguage) => {
        setLang(newLanguage.toLowerCase())
    }

    return <LanguageContext.Provider value={{lang,changeLanguage,t}}>{children}</LanguageContext.Provider>
}


export function useLanguageValue() {
    return useContext(LanguageContext)
}