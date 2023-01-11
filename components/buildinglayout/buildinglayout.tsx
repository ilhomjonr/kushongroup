import React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

export const BuildingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
