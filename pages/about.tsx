import Head from "next/head";
import { useContext } from "react";
import { HomeLayout } from "../components/homelayout/homelayout";
import { IntroSection } from "../components/intro/intro";
import { AboutStats } from "../components/mainpage/aboutstats/aboutstats";
import { MainDirections } from "../components/mainpage/directions/directions";
import { MainMap } from "../components/mainpage/map/map";
import { AboutProjects } from "../components/mainpage/projects/projects";
import { TranslationsContext } from "../contexts/TranslationsContext";

export default function MainAbout() {
  const { translations } = useContext(TranslationsContext);
  return (
    <>
      <Head>
        <title>Kushon| {translations.ourholding}</title>
      </Head>
      <HomeLayout>
        <IntroSection
          mainpage={{ url: "/" }}
          color={"#001935"}
          title={translations.ourholding}
          page={translations.aboutcompany}
        />
        <AboutStats />
        <AboutProjects />
        <MainDirections />
        <MainMap />
      </HomeLayout>
    </>
  );
}
