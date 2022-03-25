import React, { useState } from "react";
import { Header } from "../ui/blocks/Header";
import { Info } from "../ui/blocks/Info";
import { Download } from "../ui/blocks/Download";
import { Neighborhood } from "../ui/blocks/Neighborhood";
import { Gallery } from "../ui/blocks/Gallery";
import { Footer } from "../ui/blocks/Footer";
import ScrollMotion from "../ui/blocks/ScrollMotion/ScrollMotion";
import { ScrollToTop } from "../ui/base/ScrollToTop";

const HomePage = () => {
  const [headColor, setHeadColor] = useState();
  const [headSolid, setHeadSolid] = useState(false);
  return (
    <ScrollToTop>
      <Header color={headColor} solid={headSolid} />
      <ScrollMotion setHeadColor={setHeadColor} setHeadSolid={setHeadSolid} />
      <Info />
      <Download />
      <Neighborhood />
      <Gallery />
      <Footer />
    </ScrollToTop>
  );
};

export default HomePage;
