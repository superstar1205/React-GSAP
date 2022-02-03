import React from "react";
import { Header } from "../ui/blocks/Header";
import { ScrollToTop } from "../ui/base/ScrollToTop";
import { AgreementsView } from "../ui/blocks/AgreementsView";
import Footer from "../ui/blocks/Footer/Footer";

const PolicyPage = () => {
  return (
    <ScrollToTop>
      <Header solid />
      <AgreementsView />
      <Footer />
    </ScrollToTop>
  );
};

export default PolicyPage;
