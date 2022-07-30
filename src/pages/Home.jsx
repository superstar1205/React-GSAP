import React, { useState, useEffect } from "react";
import { Header } from "../ui/blocks/Header";
import ScrollMotion from "../ui/blocks/ScrollMotion/ScrollMotion";
import { ScrollToTop } from "../ui/base/ScrollToTop";
import { Gallery } from "../ui/blocks/Gallery";
import { Info } from "../ui/blocks/Info";
import { Download } from "../ui/blocks/Download";
import { Neighborhood } from "../ui/blocks/Neighborhood";
import { Footer } from "../ui/blocks/Footer";
const HomePage = () => {
  const [headColor, setHeadColor] = useState('white');
  const [headSolid, setHeadSolid] = useState(false);
  const [bottomShow, setBottomShow] = useState(false);

  useEffect( ()=> {
    if(window.innerWidth>768){
      window.scrollTo(0,0);
    } else {
      setBottomShow(true);
    }
  }, [bottomShow]);
  return (
      <ScrollToTop>
      <Header color={headColor} solid={headSolid} />
        <ScrollMotion setHeadColor={setHeadColor} setHeadSolid={setHeadSolid} setBottomShow={setBottomShow}/>
        { bottomShow 
          ? <>
                <Info />
                <Download />
                <Neighborhood />
                <Gallery />
                <Footer />
            </>
          : ""
        }
    </ScrollToTop>
  );
};

export default HomePage;
