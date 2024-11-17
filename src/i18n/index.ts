import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homepageKA from "../i18n/ka/pages/home.json";
import homepageEN from "../i18n/en/pages/home.json"
import signinpageEN from "../i18n/en/pages/login.json"
import signinpageKA from "../i18n/ka/pages/login.json"
import LanguageDetector from 'i18next-browser-languagedetector';
import SignupKA from "../i18n/ka/pages/signup.json"
import SignupEN from "../i18n/en/pages/signup.json"


const options = {  
  order: ["path", "subdomain"],

  lookupQuerystring: "lang",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
};

const lngDetector = new LanguageDetector();

i18n.use(lngDetector)
.use(initReactI18next)
.init({
    detection: options,
    resources: {
      ka : {
        translation : {"homepage" : homepageKA , "signpage" : signinpageKA , "signup" : SignupKA}
      } , 
      en : {
        translation : {"homepage" : homepageEN , "signpage" : signinpageEN , "signup" : SignupEN} 
        }
    },
    lng: "en", 
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });