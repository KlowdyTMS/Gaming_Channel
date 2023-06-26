import styled from "styled-components";

// @ts-ignore
export const IconsContainer = styled("div")(() => ({
  svg: {
    cursor: "pointer",
    padding: "4px",
    margin: "0 5px",
    fontSize: "20px",
    borderRadius: "50%",
    border: "1px solid #e0e0e0",
    "&:hover": {
      backgroundColor: "#e0e0e0",
      color: "#000",
    },
  },
  opacity: 0,
  transition: "all 1s ease-in-out",
  animation: "iconsHome 850ms ease-in-out forwards",
  animationDelay: "700ms",
  "@keyframes iconsHome": {
    from: {
      opacity: 0,
      transform: "translateX(-30px)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0px)",
    },
  },
}));
