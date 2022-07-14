import { Button } from "../styled/Button.styled";
import { TbWorld } from "react-icons/tb";
import { WebsteListHeaderContainer } from "../styled/WebsiteListHeaderContainer";
const WebsitesListHeader = ({ showOverlay }) => {
  return (
    <>
      <WebsteListHeaderContainer>
        <Button dark onClick={showOverlay}>
          <TbWorld />
          Add Website
        </Button>
      </WebsteListHeaderContainer>
    </>
  );
};

export default WebsitesListHeader;
