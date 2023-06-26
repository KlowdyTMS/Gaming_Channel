import { IconsHome } from "../../components/IconsHome/IconsHome";
import {
  CentralDiv,
  ContainerHome,
  SubTitleHome,
  TitleHome,
} from "./Home-style";

export function Home() {
  return (
    <ContainerHome>
      <CentralDiv onMouseEnter={() => console.log("eai")}>
        <TitleHome>Gaming Channel</TitleHome>
        <SubTitleHome>New Videos Every Week.</SubTitleHome>
        <IconsHome />
      </CentralDiv>
    </ContainerHome>
  );
}
