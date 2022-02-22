import React, { useState } from "react";
import { Header } from "../ui/blocks/Header";
import ScrollMotion from "../ui/blocks/ScrollMotion/ScrollMotion";
import { ScrollToTop } from "../ui/base/ScrollToTop";

const HomePage = () => {
  const [headColor, setHeadColor] = useState();
  const [headSolid, setHeadSolid] = useState(false);
  return (
    <ScrollToTop>
      <Header color={headColor} solid={headSolid} />
      <ScrollMotion setHeadColor={setHeadColor} setHeadSolid={setHeadSolid} />            
    </ScrollToTop>
  );
};

export default HomePage;
