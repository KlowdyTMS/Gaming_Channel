import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
  // @ts-ignore
} from "react-icons/Ai";
// @ts-ignore
import { BiLogoFacebook } from "react-icons/Bi";
import { IconsContainer } from "./IconsHome-style";

export function IconsHome() {
  return (
    <IconsContainer>
      <AiOutlineInstagram />
      <BiLogoFacebook />
      <AiOutlineTwitter />
      <AiOutlineYoutube />
    </IconsContainer>
  );
}
