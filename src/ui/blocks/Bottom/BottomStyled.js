import styled from "styled-components";

export const BottomWrapper = styled.div`
  animation-name: fadeAnimation-bottom;
  animation-duration: 1.5s;
  animation-timing-function: ease-in;

  @keyframes fadeAnimation-bottom {
		0%   {
      opacity: 0;
		}
		100%   {
      opacity: 1;
		}
	}
   &.fadeOut {
      animation-name: fade-out-last;
      animation-duration: 1s;
      animation-timing-function: ease-out;
    }
    @keyframes fade-out-last{
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    
    
`;