import {
  YouTube,
  FacebookOutlined,
  Twitter,
  Instagram,
  // @ts-ignore
} from "@mui/icons-material";
import { IconsContainer } from "./IconsHome-style";

export function IconsHome() {
  return (
    <IconsContainer>
      <Instagram />
      <FacebookOutlined />
      <Twitter />
      <YouTube />
    </IconsContainer>
  );
}
