import Head from "next/head";
import { BuildingLayout } from "../../../components/buildinglayout/buildinglayout";

export default function NewsInnerPage() {
  return (
    <>
      <Head>
        <title>Kushon Qurilish | Yangilik inner</title>
      </Head>
      <BuildingLayout>
        <p>Inner</p>
      </BuildingLayout>
    </>
  );
}
