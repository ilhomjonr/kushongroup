import Head from "next/head";
import { BuildingLayout } from "../../components/buildinglayout/buildinglayout";

export default function BuildingPage() {
  return (
    <>
      <Head>
        <title>Kushon Qurilish</title>
      </Head>
      <BuildingLayout>
        <p>Index</p>
      </BuildingLayout>
    </>
  );
}
