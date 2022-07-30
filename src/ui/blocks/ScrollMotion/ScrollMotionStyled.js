import styled, { css } from "styled-components";
import { themeColor, themeFontSize } from "../../theme";

const rowsStyles = (fitness, climbing, woman, man, date, time) => {
  return css`
    left: ${fitness
      ? "-50%"
      : climbing
      ? "51.5%"
      : woman
      ? "55%"
      : man
      ? "-75%"
      : date
      ? "-44.5%"
      : time
      ? "47%"
      : "0"};
    bottom: ${fitness
      ? `50%`
      : climbing
      ? `12%`
      : woman
      ? "48.5%"
      : man
      ? "3%"
      : date
      ? "67%"
      : time
      ? "7%"
      : "0"};
    width: ${fitness || climbing
      ? "15.625vw"
      : woman
      ? "19.396vw"
      : man
      ? "18.271vw"
      : date
      ? "13.750vw"
      : time
      ? "18.438vw"
      : "0"};
    @media (max-width: 1400px) {
      width: ${fitness || climbing
        ? "19vw"
        : woman
        ? "27vw"
        : man
        ? "23.2vw"
        : date
        ? "16.6vw"
        : time
        ? "22.2vw"
        : "19vw"};
      bottom: ${fitness
        ? "48.5%"
        : climbing
        ? "16%"
        : woman
        ? "54%"
        : man
        ? "13%"
        : date
        ? "71.5%"
        : time
        ? "16.5%"
        : "0"};
      left: ${fitness
        ? "-40%"
        : climbing
        ? "49%"
        : woman
        ? "55%"
        : man
        ? "-52%"
        : date
        ? "-33%"
        : time
        ? "47%"
        : "0"};
    }
    @media (max-width: 640px) {
      width: ${date? "43vw" : "55vw"};
      bottom: ${fitness
        ? "22%"
        : climbing
        ? "-20%"
        : woman
        ? "40%"
        : man
        ? "0%"
        : date
        ? "47%"
        : time
        ? "-23%"
        : "0"};
      left: ${fitness
        ? "-32%"
        : climbing
        ? "39%"
        : woman
        ? "15%"
        : man
        ? "-38%"
        : date
        ? "-36%"
        : time
        ? "30%"
        : "0"};
    }
    @media (max-width: 350px) {
      width: ${date? "37vw" : "45vw"};
      bottom: ${fitness
        ? "48%"
        : climbing
        ? "20%"
        : woman
        ? "55%"
        : man
        ? "35%"
        : date
        ? "59%"
        : time
        ? "15%"
        : "0"};
      left: ${fitness
        ? "-32%"
        : climbing
        ? "39%"
        : woman
        ? "35%"
        : man
        ? "-30%"
        : date
        ? "-16%"
        : time
        ? "40%"
        : "0"};
    }
  `;
};
const indent = "0px";

export const StickyStyled = styled.div`
  overflow: hidden;
  position: relative;
`;

export const MainTitle = styled.div`
  color: ${themeColor("txt")};
  font-size: 4vw;
  text-align: center;
  font-family: Poppins, Montserrat, sans-serif;
  font-weight: 600;
  line-height: 4.2vw;
  position: absolute;
  width: 100%;
  display: block;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -370%);
  @media (max-width: 1400px) {
    font-size: 4.8vw;
    line-height: 5.5vw;
    transform: translate(-50%, calc(-300% - ${indent}));
  }
  @media (max-width: 640px) {
    top: 0;
    position: absolute;
    font-size: 9vw;
    line-height: 12vw;
    transform: translate(-50%, 20vh);
  }
  @media (max-width: 350px) {
    font-size: 8vw;
    line-height: 12vw;
    transform: translate(-50%, -66vh);
  }
  
`;

export const PhoneWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  height: 100%;
  border: none;
`;

export const PhonePicture = styled.div`
  border: 5px solid ${themeColor("txt")};
  box-shadow: 0 0 0 1px ${themeColor("white")};
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  width: 15.188vw;
  height: 33.083vw;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: ${({ first }) => (first ? "110%" : "55vh")};
  transition: all 0.5s;
  background-color: ${themeColor("txt")};
  transform: translate(
      -50%,
      ${({ first }) => (first ? `calc(-26vw + 50px)` : "-50%")}
    )
    ${({ first }) => (first ? "scale(1.5)" : "scale(1.2)")};
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  @media (max-width: 1400px) {
    width: 20.8vw;
    height: 44.8vw;
    top: ${({ first }) => (first ? "95%" : "55vh")};
    transform: translate( 
        -50%,-50%
      )
      ${({ first }) => (first ? "scale(1.2)" : "scale(1.0)")};
    }
  @media (max-width: 640px) {
    width: 53.125vw;
    height: 115vw;
    bottom: 0;
    top: ${({first})=> first?'55vh':'0vh'};
    transform: ${({ first }) =>
      first ? "translate(-50%, 0%) scale(1.4)" : "translate(-50%, 60%) scale(1.2)"};
  }  
  @media (max-width: 350px) {
    width: 53.125vw;
    height: 115vw;
    bottom: 0;
    top: 0;
    transform: ${({ first }) =>
      first ? "translate(-50%, 60%) scale(1.1)" : "translate(-50%, 50%) scale(0.9)"};
  }  
`;

export const PictureRowsWrapper = styled.div`
  position: absolute;
  top: ${({ first }) => (first ? '57%' : '50%')};
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  width: 15.188vw;
  height: 33.083vw;
  z-index: 3;
  opacity: ${({ first }) => (first ? 0 : 1)};
  transition: all 0.5s;
  @media (max-width: 1400px) {
    width: 20.8vw;
    height: 44.8vw;
    bottom: auto;
    top: 55%;
    transform: translate(
      -50%,
      ${({ first }) => (first ? `calc(-50% + ${indent})` : "-50%")}
    );
  }
  @media (max-width: 640px) {
    width: 53.125vw;
    height: 115vw;
    bottom: 0;
    top: 0;
    transform: translate(-50%, 40%);
    &.last {
      transform: translate(-50%, 30%);
    }
  }
`;

export const PictureRow = styled.div`
  position: absolute;
  z-index: 2;
  ${({ fitness, climbing, woman, man, date, time }) =>
    rowsStyles(fitness, climbing, woman, man, date, time)}
  border-radius: 10px;
  img {
    width: 100%;
    box-shadow: 4px 4px 20px 0 rgba(25, 29, 58, 0.17);
    border-radius: 10px;
  }
`;

export const Column = styled.div`
  color: ${({ dark, theme }) =>
    dark ? theme.colors["txt"] : theme.colors["white"]};
  position: absolute;
  width: 19vw;
  top: 48%;
  left: ${({ left }) => (left ? "16%" : "auto")};
  right: ${({ right }) => (right ? "16%" : "auto")};
  transform: translateY(-50%);
  text-align: left;
  opacity: ${({ first }) => (first ? 0 : 1)};
  transition: all 0.5s;
  @media (max-width: 1400px) {
    width: 27.5vw;
    left: ${({ left }) => (left ? "8%" : "auto")};
    right: ${({ right }) => (right ? "8%" : "auto")};
    top: 48%;
  }
  @media (max-width: 640px) {
    width: 58vw;
    top: 0;
    bottom: 0;
    left: ${({ right }) => (right ? "5%" : "auto")};
    right: ${({ left }) => (left ? "5%" : "auto")};
    transform: translate(0%, 28vw);
  }
  @media (max-width: 350px) {
    transform: translate(0%, 24vw);
  }
  `;

export const ColumnTitle = styled.div`
  font-size: ${themeFontSize("large")};
  line-height: 33px;
  font-family: Poppins, sans-serif;
  font-weight: 700;
 
  @media (max-width: 1200px) {
    font-size: ${themeFontSize("regular")};
    line-height: 24px;
    margin-top: 11px;
  }
  @media (max-width: 640px) {
    font-size: 5.625vw;
  }
 
`;

export const ColumnText = styled.div`
  font-size: ${themeFontSize("medium")};
  line-height: 27px;
  font-family: Montserrat, sans-serif;
  margin-top: 15px;
  
  @media (max-width: 1200px) {
    font-size: ${themeFontSize("small")};
    line-height: 30px;
    margin-top: 5px;
  }
  @media (max-width: 640px) {
    font-size: 3.75vw;
    line-height: 20px;
    margin-top: 1.5vw;
  }
  @media (max-width: 320px) {
    font-size: 3vw;
    line-height: 14px;
    margin-top: 1.5vw;
  }
`;

export const Circle = styled.div`
  background-color: ${themeColor("txt")};

  animation-name: ${({ fade }) => (
    fade ? 'fadeAnimation-circle' : ''
  )};
  animation-duration: 1.5s;
  animation-timing-function: ease;
  -webkit-animation-name: ${({ fade }) => (
    fade ? 'fadeAnimation-circle' : ''
  )};
  -webkit-animation-duration: 1.5s;
  -webkit-animation-timing-function: ease;

  @keyframes fadeAnimation-circle {
    0% {
      background-color: ${themeColor("pink")};
    }
    100% {
      background-color: ${themeColor("txt")};
    }
  }
  @-webkit-keyframes fadeAnimation-circle {
    0% {
      -webkit-background-color: ${themeColor("pink")};
    }
    100% {
      -webkit-background-color: ${themeColor("txt")};
    }
  }
  width: 37.417vw;
  height: 37.417vw;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  margin: 0 auto;
  position: absolute;
  bottom: -12%;
  left: 50%;
  transform: translate(-50%, 20%);
  transform-origin: center;
  transition: all 0.5s;
  @media (max-width: 1400px) {
    width: 40.5vw;
    height: 40.5vw;
    bottom: 0;
    transform: translate(-50%, 35%);
  }
  @media (max-width: 640px) {
    width: 150vw;
    height: 150vw;
    bottom: 0;
    transform: translate(-50%, 35%);
  }
`;

export const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 640px) {
    height: 220vw;
    &.mobileSection {
      height: 200vw;
      ${Column} {
        transform: translate(0, 13vw);
      }
      ${PhonePicture} {
        transform: translate(-50%,55vw) scale(1.2);
      }
      ${PictureRow} {
        transform: translate(0%,-15vw);
      }
    }
  }
  @media screen and (max-width: 350px) {
    height: 190vw;
  }
  &::-webkit-scrollbar  
  {
    width: 0px;
  }
  &.scrollY {
    overflow-x: hidden;  
    height: 100vh;
    overflow-y: hidden;
  }

  .slide2 img {
    border-radius: 20px;
  }

  width: 100%;
  animation-name: ${({ type }) => (
    type === '12' ? 'fadeAnimation12' :
    type === '23' ? 'fadeAnimation23' :
    type === '32' ? 'fadeAnimation32' : ''
  )};

  animation-duration: 1.5s;
  animation-timing-function: ease;

  -webkit-animation-name: ${({ type }) => (
    type === '12' ? 'fadeAnimation12' :
    type === '23' ? 'fadeAnimation23' :
    type === '32' ? 'fadeAnimation32' : ''
  )};

  -webkit-animation-duration: 1.5s;
  -webkit-animation-timing-function: ease;

  .hideAlways {
    display: none !important;
  }

  &.noSection {
    display: none !important;
  }

  &.hideSection {
    // display: none !important;
  }

  

  &.hideSection .hidden {
    display: none !important;
  }

  
//////////Slide////////////

&.showSection .slide {
  animation-name: slide1Anim-show;
  animation-duration: 1.6s;
  animation-timing-function: ease;
  -webkit-animation-name: slide1Anim-show;
  -webkit-animation-duration: 1.6s;
  -webkit-animation-timing-function: ease;
}
@keyframes slide1Anim-show {
  0%,55%  {
    // transform: translate(0,60vh);  
    opacity: 0;
  }
  100%   {
    // transform: translate(0,0vh);  
    opacity: 1;
  }
}
@-webkit-keyframes slide1Anim-show {
  0%,55%  {
    -webkit-opacity: 0;
  }
  100%   {
    -webkit-opacity: 1;
  }
}

&.hideSection .slide {
  animation-name: slide1Anim-hide;
  animation-duration: 1.7s;
  animation-timing-function: ease;
  -webkit-animation-name: slide1Anim-hide;
  -webkit-animation-duration: 1.7s;
  -webkit-animation-timing-function: ease;
}

@keyframes slide1Anim-hide {
  0%, 10%{
    // transform: translate(0,0vh); 
    opacity: 1; 
  }
  50%, 100% {
    // transform: translate(0,-50vh);
    opacity: 0;
  } 
}
@-webkit-keyframes slide1Anim-hide {
  0%, 10%{
    -webkit-opacity: 1; 
  }
  50%, 100% {
    -webkit-opacity: 0;
  } 
}

//////////Slide////////////

&.showSection .slide3 {
  animation-name: slide1Anim-show3;
  animation-duration: 1.7s;
  animation-timing-function: ease;
  -webkit-animation-name: slide1Anim-show3;
  -webkit-animation-duration: 1.7s;
  -webkit-animation-timing-function: ease;
}
@keyframes slide1Anim-show3 {
  0%,55%  {
    // transform: translate(0,40vh);  
    opacity: 0;
  }
  100%   {
    // transform: translate(0,0vh);  
    opacity: 1;
  }
}
@-webkit-keyframes slide1Anim-show3 {
  0%,55%  {
    -webkit-opacity: 0;
  }
  100%   {
    -webkit-opacity: 1;
  }
}

&.hideSection .slide3 {
  animation-name: slide1Anim-hide3;
  animation-duration: 1.6s;
  animation-timing-function: ease;
  -webkit-animation-name: slide1Anim-hide3;
  -webkit-animation-duration: 1.6s;
  -webkit-animation-timing-function: ease;
}
@keyframes slide1Anim-hide3 {
  0%, 10%{
    // transform: translate(0,0vh);  
    opacity: 1;
  }
  40%, 100% {
    // transform: translate(0,-50vh);
    opacity: 0;
  } 
}
@-webkit-keyframes slide1Anim-hide3 {
  0%, 10%{
    -webkit-opacity: 1;
  }
  40%, 100% {
    -webkit-opacity: 0;
  } 
}






  // Animations

  @keyframes fadeAnimation12 {
    0% {
      background-color: ${themeColor('txt')};
    }
    50%, 100% {
      background-color: ${themeColor("pink")};
    }
  }
  @-webkit-keyframes fadeAnimation12 {
    0% {
      -webkit-background-color: ${themeColor('txt')};
    }
    50%, 100% {
      -webkit-background-color: ${themeColor("pink")};
    }
  }
  @keyframes fadeAnimation21 {
    0% {
      background-color: ${themeColor("pink")};
    }
    50%, 100% {
      background-color: ${themeColor("txt")};
    }
  }
  @-webkit-keyframes fadeAnimation21 {
    0% {
      -webkit-background-color: ${themeColor("pink")};
    }
    50%, 100% {
      -webkit-background-color: ${themeColor("txt")};
    }
  }
  @keyframes fadeAnimation23 {
    0% {
      background-color: ${themeColor("pink")};
    }
    50%, 100% {
      background-color: ${themeColor("white")};
    }
  }
  @-webkit-keyframes fadeAnimation23 {
    0% {
      -webkit-background-color: ${themeColor("pink")};
    }
    50%, 100% {
      -webkit-background-color: ${themeColor("white")};
    }
  }
  @keyframes fadeAnimation32 {
    0% {
      background-color: ${themeColor("white")};
    }
    50%, 100% {
      background-color: ${themeColor("pink")};
    }
  }
  @-webkit-keyframes fadeAnimation32 {
    0% {
      -webkit-background-color: ${themeColor("white")};
    }
    50%, 100% {
      -webkit-background-color: ${themeColor("pink")};
    }
  }


  &.showSection .slide2 img.main{
    animation-name: phoneAnimation-show;
    animation-duration: 1.2s;
		animation-timing-function: ease;
  }

  @keyframes phoneAnimation-show {
		0%   {
      top: 100%;
		}
		100%   {
      top: 0;
		}
	}

  @-webkit-keyframes phoneAnimation-show {
		0%   {
      -webkit-top: 100%;
		}
		100%   {
      -webkit-top: 0;
		}
	}

  &.hideAll {
    display: none !important;
  }



  &.pink {
    background-color: ${themeColor("pink")};
  }
  &.white {
    background-color: ${themeColor("white")};
  }
  &.wrap, &.wrap2 {
  
    ${Circle} {
      width: 180vw;
      height: 180vw;
      bottom: -20%;
    }
    ${PhonePicture} {
      top: 55vh;
      transform: translate(
          -50%, -50%
        )
        scale(1.2);
    }
    ${PictureRowsWrapper} {
      opacity: 1;
    }
    ${Column} {
      opacity: 1;
    }
    @media (max-width: 1400px) {
      ${PictureRowsWrapper} {
        transform: translate(
          -50%,
          ${({ first }) => (first ? `calc(-50%)` : "-50%")});
      }
      ${PhonePicture} {
        top: 55vh;
        transform: translate(
          -50%,-50%
        ) scale(1.0)
        ;
      }
      ${Circle} {
        bottom: 40%;
      }
    }
    @media (max-width: 640px) {
      ${PhonePicture} {
        bottom: 0;
        top: 0vh;    
        transform: translate(-50%, 60%) scale(1.2);
      }
      ${PictureRowsWrapper} {
        transform: translate(-50%, 40%);
      }
      ${Circle} {
        width: 3000vw;
        height: 3000vw;
        bottom: -20%;
      }
    }
    @media (max-width: 350px) {
      ${PhonePicture} {
        bottom: 0;
        top: 0;    
        transform: translate(-50%, 50%) scale(0.9);
      }
      ${PictureRowsWrapper} {
        transform: translate(-50%, 50%);
      }
    }
  }
`;
