import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { DynamicPageAbout } from "../components/dynamicpage/about/about";
import { DynamicPageFooter } from "../components/dynamicpage/footer/footer";
import { DynamicPageHeader } from "../components/dynamicpage/header/header";
import { DynamicPagePartners } from "../components/dynamicpage/partners/partners";
import { DynamicPageHero } from "../components/dynamicpage/hero/hero";
import { DynamicPageProjects } from "../components/dynamicpage/projects/projects";
import { DynamicPageContacts } from "../components/dynamicpage/contact/contact";
import styles from "../styles/dynamic.module.css";
import { facebook, instagram, telegram } from "../public/icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./_app";
import { TranslationsContext } from "../contexts/TranslationsContext";
import { Spinner } from "../components/spinner/spinner";

export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState({});
  const { isLoading, setIsLoading } = useContext(TranslationsContext);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/services/${slug}`)
      .then((res) => {
        if (router.locale === "ru") {
          setTitle(res.data.data.title.ru);
        } else if (router.locale === "en") {
          setTitle(res.data.data.title.en);
        } else if (router.locale === "uz") {
          setTitle(res.data.data.title.uz);
        }
        setService(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [router]);

  return (
    <>
      <Head>
        <title>Kushon | Title</title>
      </Head>
      {isLoading ? (
        <Spinner isLoading={isLoading} color={"#180E10"} />
      ) : (
        <motion.div
          className="wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <section style={{ backgroundColor: "white" }}>
            <div className={`dynamic_box ${styles.header_top}`}>
              <nav className={styles.header_top_sm}>
                <a href="#" target={"_blank"} rel={"noreferrer"}>
                  {telegram}
                </a>
                <a href="#" target={"_blank"} rel={"noreferrer"}>
                  {instagram}
                </a>
                <a href="#" target={"_blank"} rel={"noreferrer"}>
                  {facebook}
                </a>
              </nav>
              <a href="tel:+998 00 000 00 00" className="p">
                +998 00 000 00 00
              </a>
            </div>
          </section>
          <DynamicPageHeader />
          <main>
            <DynamicPageHero service={service} />
            <DynamicPageAbout />
            <DynamicPageProjects />
            <DynamicPageContacts />
            <DynamicPagePartners />
          </main>
          <DynamicPageFooter />
        </motion.div>
      )}
    </>
  );
}

// const data = await axios
//   .get(`${BASE_URL}/services/${slug}`)
//   .then((res) => {
//     console.log(res.data.data);
//     setService(res.data.data);
//   })
//   .catch((err) => console.log(err));
