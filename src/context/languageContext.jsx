import { useContext,createContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({children, lang, setLang}){
    const [lang,setLang] = useState('')
    return <LanguageContext.Provider lang={lang} setLang={setLang}>{children}</LanguageContext.Provider>
}


export function useLanguageValue() {
    return useContext(LanguageContext)
}