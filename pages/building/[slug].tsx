import Head from "next/head";
import { BuildingLayout } from "../../components/buildinglayout/buildinglayout";

export default function BuildingInnerPage() {
  return (
    <>
      <Head>
        <title>Kushon Qurilish | Inner</title>
      </Head>
      <BuildingLayout>
        <p>Qurilish inner</p>
      </BuildingLayout>
    </>
  );
}
