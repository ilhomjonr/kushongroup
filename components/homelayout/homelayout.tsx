import React, { useContext, useEffect, useState } from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { motion, AnimatePresence } from "framer-motion";
import { Spinner } from "../spinner/spinner";
import { TranslationsContext } from "../../contexts/TranslationsContext";
import { useRouter } from "next/router";

export const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter();
  const [isContactPage, setIsContactPage] = useState<boolean>(false);
  const { isLoading, translations } = useContext(TranslationsContext);

  useEffect(() => {
    if (pathname.includes("/contact")) {
      setIsContactPage(true);
    }
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading ? (
        <Spinner isLoading={isLoading} color="#001935" />
      ) : (
        <motion.div
          className="wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <Header translations={translations} />
          <main>{children}</main>
          <Footer translations={translations} isContactPage={isContactPage} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
