import React, { useEffect, useState } from "react";
import { Header } from "../ui/blocks/Header";
import { Footer } from "../ui/blocks/Footer";
import { Search } from "../ui/blocks/Search";
import { Accordion } from "../ui/blocks/Accordion";
import ScrollToTop from "../ui/base/ScrollToTop/ScrollToTop";

const FaqPage = () => {
  const [searchData, setSearchData] = useState([]);
  const handleSearch = (val) => setSearchData(val.split(" "));

  return (
    <ScrollToTop>
      <Header solid />
      <Search onSearchSubmit={(val) => handleSearch(val)} />
      <Accordion filterBySearch={searchData} />
      <Footer />
    </ScrollToTop>
  );
};

export default FaqPage;
