import Head from "next/head";
import { useContext } from "react";
import { BuildingLayout } from "../../components/buildinglayout/buildinglayout";
import { ContactComponent } from "../../components/contact/contact";
import { IntroSection } from "../../components/intro/intro";
import { TranslationsContext } from "../../contexts/TranslationsContext";

export default function BuildingContactPage() {
  const { translations } = useContext(TranslationsContext);

  return (
    <>
      <Head>
        <title>Kushon Qurilish | Contact</title>
      </Head>
      <BuildingLayout>
        <IntroSection
          mainpage={{ url: "/building" }}
          color={"#0A392D"}
          title={"Связатся с нами"}
          page={translations.contact}
        />
        <ContactComponent />
      </BuildingLayout>
    </>
  );
}
