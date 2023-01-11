import Head from "next/head";
import { BuildingLayout } from "../../components/buildinglayout/buildinglayout";

export default function BuildingAboutPage() {
  return (
    <>
      <Head>
        <title>Kushon Qurilish | About</title>
      </Head>
      <BuildingLayout>
        <p>About</p>
      </BuildingLayout>
    </>
  );
}
