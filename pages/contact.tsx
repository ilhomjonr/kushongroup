import Head from "next/head";
import { HomeLayout } from "../components/homelayout/homelayout";
import { IntroSection } from "../components/intro/intro";

export default function MainContact() {
  return (
    <>
      <Head>
        <title>Kushon | Контакты</title>
      </Head>
      <HomeLayout>
        <IntroSection
          color={"#001935"}
          title={"Связатся c нами"}
          page={"Контакты "}
        />
      </HomeLayout>
    </>
  );
}
