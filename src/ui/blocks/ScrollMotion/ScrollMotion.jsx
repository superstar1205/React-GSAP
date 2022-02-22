import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Circle,
  Column,
  ColumnText,
  ColumnTitle,
  MainTitle,
  PhonePicture,
  PhoneWrapper,
  PictureRow,
  PictureRowsWrapper,
  Section,
  StickyStyled,
} from "./ScrollMotionStyled";

import firstPhone from "../../../static/pictures/phone.png";
import secondPhone from "../../../static/pictures/phone_2.png";
import thirdPhone from "../../../static/pictures/phone_3.png";
import womanRow from "../../../static/pictures/womanRow.svg";
import manRow from "../../../static/pictures/manRow.svg";
import dateRow from "../../../static/pictures/dateRow.svg";
import timeRow from "../../../static/pictures/timeRow.svg";
import fitnessRow from "../../../static/pictures/fitness_row.svg";
import rockClimbingRow from "../../../static/pictures/rock_climbing_row.svg";
import { Info } from "../../../ui/blocks/Info";
import { Download } from "../../../ui/blocks/Download";
import { Neighborhood } from "../../../ui/blocks/Neighborhood";
import { Gallery } from "../../../ui/blocks/Gallery";
import { Footer } from "../../../ui/blocks/Footer";

gsap.registerPlugin(ScrollTrigger);

const ScrollMotion = ({ setHeadColor, setHeadSolid }) => {
  const wrapper = useRef();
  const firstSection = useRef();
  const secondSection = useRef();
  const thirdSection = useRef();
  const lastSection = useRef();

  useEffect(() => {
    const sections = gsap.utils.toArray(".sticky");
    sections.forEach((section) => {
      ScrollTrigger.create({
        duration: 1,
        trigger: section,
        start: "70px top",        
        pin: true,
        pinSpacing: false,
      });
    });
    ScrollTrigger.create({
      trigger: firstSection.current,
      start: "top top",          
      toggleClass: "wrap",
      onEnter: () => {
        setHeadColor("white");
        setHeadSolid(false);
      },
      onLeaveBack: () => {
        setHeadColor("grey");
        setHeadSolid(false);
      },
    });    

    ScrollTrigger.create({
      trigger: secondSection.current,
      start: "top top",    
      end: "bottom bottom",
    });    

    ScrollTrigger.create({
      trigger: thirdSection.current,
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      onEnter: () => {
        setHeadColor("grey");
      },
      onEnterBack: () => {
        setHeadSolid(false);
      },
      onLeave: () => {
        setHeadSolid(true);
      },
      onLeaveBack: () => {
        setHeadColor("white");
        setHeadSolid(false);
      },
    });
    ScrollTrigger.create({
      trigger: lastSection.current,      
    });    
    ScrollTrigger.create({
      snap: 1 / 2.84
    });
  }, []);

  return (
    <StickyStyled ref={wrapper}>
      <Section className="sticky" ref={firstSection} first>
        {/* Title */}
        <MainTitle>
          Learn Something <br /> New Today
        </MainTitle>
        <Circle />
        {/* circle */}
        <PictureRowsWrapper first>
          <PictureRow fitness>
            <img src={fitnessRow} alt="fitness" />
          </PictureRow>
          <PictureRow climbing>
            <img src={rockClimbingRow} alt="climbing" />
          </PictureRow>
        </PictureRowsWrapper>
        {/* Text columns */}
        <Column right first>
          <ColumnTitle>Choose a class</ColumnTitle>
          <ColumnText>
            You will be able to see what <br /> types of classes are available{" "}
            <br /> in your neighborhood
          </ColumnText>
        </Column>
        {/* Phone images */}
        <PhoneWrapper>
          <PhonePicture first>
            <img src={firstPhone} alt="phone" />
          </PhonePicture>
        </PhoneWrapper>
      </Section>

      <Section className="sticky pink" ref={secondSection}>
        <PictureRowsWrapper>
          <PictureRow woman>
            <img src={womanRow} alt="woman" />
          </PictureRow>
          <PictureRow man>
            <img src={manRow} alt="man" />
          </PictureRow>
        </PictureRowsWrapper>
        <Column left>
          <ColumnTitle>Select an Instructor</ColumnTitle>
          <ColumnText>
            See the different instructors <br /> for the type of classes <br />{" "}
            selected, price and reviews
          </ColumnText>
        </Column>
        <PhoneWrapper>
          <PhonePicture>
            <img src={secondPhone} alt="phone" />
          </PhonePicture>
        </PhoneWrapper>
      </Section>
      <Section className="white" ref={thirdSection}>
        <PictureRowsWrapper className="last">
          <PictureRow date>
            <img src={dateRow} alt="date" />
          </PictureRow>
          <PictureRow time>
            <img src={timeRow} alt="time" />
          </PictureRow>
        </PictureRowsWrapper>
        <Column className="last" right dark>
          <ColumnTitle>Schedule Class</ColumnTitle>
          <ColumnText>
            Select dateand time you want <br /> to takethe class and that’s it!
          </ColumnText>
        </Column>
        <PhoneWrapper>
          <PhonePicture className="last">
            <img src={thirdPhone} alt="phone" />
          </PhonePicture>
        </PhoneWrapper>
      </Section>
      <Section className="sticky" ref={lastSection}>
        <Info />
        <Download />
        <Neighborhood />
        <Gallery />
        <Footer />
      </Section>
    </StickyStyled>
  );
};

export default ScrollMotion;
