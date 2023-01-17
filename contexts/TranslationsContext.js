import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useState, useEffect } from "react";
import { BASE_URL } from "../pages/_app";

export const TranslationsContext = createContext();

export default function TranslationsContextProvider({ children }) {
  const router = useRouter();

  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let translationsArray = [];

  useEffect(() => {
    setIsLoading(true);
    if (router.locale === "en") {
      axios
        .get(`${BASE_URL}/translations`)
        .then((res) => {
          const data = res.data.data;
          data.forEach((translation) => {
            translationsArray.push({
              [translation.key]: translation.val.en,
            });
          });
          let object = {};
          for (let i = 0; i < translationsArray.length; i++) {
            Object.assign(object, translationsArray[i]);
          }
          setTranslations(object);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    } else if (router.locale === "ru") {
      axios
        .get(`${BASE_URL}/translations`)
        .then((res) => {
          const data = res.data.data;
          data.forEach((translation) => {
            translationsArray.push({
              [translation.key]: translation.val.ru,
            });
          });
          let object = {};
          for (let i = 0; i < translationsArray.length; i++) {
            Object.assign(object, translationsArray[i]);
          }
          setTranslations(object);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    } else if (router.locale === "uz") {
      axios
        .get(`${BASE_URL}/translations`)
        .then((res) => {
          const data = res.data.data;
          data.forEach((translation) => {
            translationsArray.push({
              [translation.key]: translation.val.uz,
            });
          });
          let object = {};
          for (let i = 0; i < translationsArray.length; i++) {
            Object.assign(object, translationsArray[i]);
          }
          setTranslations(object);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [router]);

  const value = { isLoading, setIsLoading, translations, setTranslations };

  return (
    <TranslationsContext.Provider value={value}>
      {children}
    </TranslationsContext.Provider>
  );
}
