import Head from "next/head";
import { HomeLayout } from "../components/homelayout/homelayout";
import { MainBlogs } from "../components/mainpage/blogs/blogs";
import { MainDirections } from "../components/mainpage/directions/directions";
import { MainHero } from "../components/mainpage/hero/hero";
import { MainMap } from "../components/mainpage/map/map";
import { MainStatistics } from "../components/mainpage/stats/stats";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kushon</title>
        <meta
          name="description"
          content="Kushongroup holding uchun bosh sahifa"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout>
        <MainHero />
        <MainStatistics />
        <MainDirections />
        <MainBlogs title={"Наши Блоги"} />
        <MainMap />
      </HomeLayout>
    </>
  );
}
