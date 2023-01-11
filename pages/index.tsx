import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
import { HomeLayout } from "../components/homelayout/homelayout";
import { MainBlogs } from "../components/mainpage/blogs/blogs";
import { MainDirections } from "../components/mainpage/directions/directions";
import { MainMap } from "../components/mainpage/map/map";

export default function Home() {
  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_ENDPOINT + "/site-info")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
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
        <p>Main</p>
        <MainDirections />
        <MainBlogs title={"Наши Блоги"} />
        <MainMap />
      </HomeLayout>
    </>
  );
}
