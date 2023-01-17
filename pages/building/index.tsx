import Head from "next/head";
import { BuildingLayout } from "../../components/buildinglayout/buildinglayout";
import { BuildingAbout } from "../../components/buildingpage/about/about";
import { Form } from "../../components/buildingpage/form/form";
import { News } from "../../components/buildingpage/news/news";
import { Partners } from "../../components/buildingpage/partners/partners";
import { OurComplex } from "../../components/buildingpage/complex/complex";
import { BuildingHero } from "../../components/buildingpage/hero/hero";

export default function BuildingPage() {
  return (
    <>
      <Head>
        <title>Kushon Qurilish</title>
      </Head>
      <BuildingLayout>
        <BuildingHero />
        <BuildingAbout />
        <Partners />
        <OurComplex />
        <Form />
        <News title={"Наши Новости"} />
      </BuildingLayout>
    </>
  );
}
