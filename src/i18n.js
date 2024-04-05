import i18n from "i18next";
import { initReactI18next, reactI18nextModule } from "react-i18next";
import detector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend';

i18n
.use(detector)
.use(Backend)
.use(initReactI18next)
.init(
    {
        whitelist:['az','en'],
        fallbackLng:'en',
        saveMissing: true
    }
)

export default i18n