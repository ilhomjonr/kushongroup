import Head from "next/head";
import { BuildingLayout } from "../../components/buildinglayout/buildinglayout";
import { Form } from "../../components/buildingpage/form/form";
import { BuildingGallery } from "../../components/buildingpage/gallery/gallery";
import { Partners } from "../../components/buildingpage/partners/partners";
import { AboutProjects } from "../../components/mainpage/projects/projects";

export default function BuildingAboutPage() {
  return (
    <>
      <Head>
        <title>Kushon Qurilish | About</title>
      </Head>
      <BuildingLayout>
        <BuildingGallery title={"Наша галерея проекта Kushon"} />
        <AboutProjects />
        <Form />
        <Partners />
      </BuildingLayout>
    </>
  );
}
