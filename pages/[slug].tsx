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

export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>Kushon | {slug?.toString().toUpperCase()}</title>
      </Head>
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
          <DynamicPageHero />
          <DynamicPageAbout />
          <DynamicPageProjects />
          <DynamicPageContacts />
          <DynamicPagePartners />
        </main>
        <DynamicPageFooter />
      </motion.div>
    </>
  );
}
