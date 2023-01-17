import Head from "next/head";
import { HomeLayout } from "../components/homelayout/homelayout";
import { IntroSection } from "../components/intro/intro";
import { AboutStats } from "../components/mainpage/aboutstats/aboutstats";
import { MainDirections } from "../components/mainpage/directions/directions";
import { MainMap } from "../components/mainpage/map/map";
import { AboutProjects } from "../components/mainpage/projects/projects";

export default function MainAbout() {
  return (
    <>
      <Head>
        <title>Kushon | O наш холдинг</title>
      </Head>
      <HomeLayout>
        <IntroSection
          mainpage={{ url: "/" }}
          color={"#001935"}
          title={"O наш холдинг"}
          page={"O компании"}
        />
        <AboutStats />
        <AboutProjects />
        <MainDirections />
        <MainMap />
      </HomeLayout>
    </>
  );
}
