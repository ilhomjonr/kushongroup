import Head from "next/head";
import { ContactComponent } from "../components/contact/contact";
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
          mainpage={{ url: "/" }}
          color={"#001935"}
          title={"Связатся c нами"}
          page={"Контакты "}
        />
        <ContactComponent />
      </HomeLayout>
    </>
  );
}
