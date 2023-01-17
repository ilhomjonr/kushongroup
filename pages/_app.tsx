import "../styles/main.css";
import type { AppProps } from "next/app";
import TranslationsContextProvider from "../contexts/TranslationsContext";
import ServicesContextProvider from "../contexts/ServicesContext";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TranslationsContextProvider>
      <ServicesContextProvider>
        <Component {...pageProps} />
      </ServicesContextProvider>
    </TranslationsContextProvider>
  );
}

export const BASE_URL = "https://edu.choopon.uz/api";
