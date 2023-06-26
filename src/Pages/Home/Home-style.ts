import styled from "styled-components";

export const ContainerHome = styled("main")(() => ({
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: "white",
}));

export const CentralDiv = styled("div")(() => ({
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  color: "white",
}));

// @ts-ignore
export const TitleHome = styled("h1")(() => ({
  userSelect: "none",
  textTransform: "uppercase",
  fontFamily: "Montserrat Variable, sans-serif",
  fontSize: "4rem",
  fontWeight: "bold",
  textAlign: "center",
  opacity: 0,
  transition: "all 1s ease-in-out",
  animation: "title 850ms ease-in-out forwards",
  animationDelay: "300ms",
  "@keyframes title": {
    from: {
      opacity: 0,
      transform: "translateY(30px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)",
    },
  },
}));
// @ts-ignore
export const SubTitleHome = styled("h2")(() => ({
  // @ts-ignore
  userSelect: "none",
  textTransform: "uppercase",
  fontFamily: "Montserrat Variable, sans-serif",
  fontSize: "1rem",
  margin: "10px 0 15px 0",
  opacity: 0,
  transition: "all 1s ease-in-out",
  animation: "subTitle 850ms ease-in-out forwards",
  animationDelay: "500ms",
  "@keyframes subTitle": {
    from: {
      opacity: 0,
      transform: "translateX(30px)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0px)",
      // @ts-ignore
    },
    // @ts-ignore
  },
}));
