import React, { useContext, useEffect, useState } from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { motion, AnimatePresence } from "framer-motion";
import { TranslationsContext } from "../../contexts/TranslationsContext";
import { Spinner } from "../spinner/spinner";
import { useRouter } from "next/router";

export const BuildingLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter();
  const { isLoading, translations } = useContext(TranslationsContext);
  const [isContactPage, setIsContactPage] = useState<boolean>(false);

  useEffect(() => {
    if (pathname.includes("/contact")) {
      setIsContactPage(true);
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading ? (
        <Spinner isLoading={isLoading} color="#0A392D" />
      ) : (
        <motion.div
          className="wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          style={{ backgroundColor: "var(--white)" }}
        >
          <Header translations={translations} />
          <main>{children}</main>
          <Footer translations={translations} isContactPage={isContactPage} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
