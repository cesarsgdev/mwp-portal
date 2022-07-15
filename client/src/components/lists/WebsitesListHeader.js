import { useState } from "react";
import { Button } from "../styled/Button.styled";
import { TbWorld } from "react-icons/tb";
import { WebsteListHeaderContainer } from "../styled/WebsiteListHeaderContainer";
const WebsitesListHeader = ({ showOverlay, searchAction }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch((prevSearch) => e.target.value);
    searchAction(e);
  };
  return (
    <>
      <WebsteListHeaderContainer>
        <div className="websiteHeaderColumn whcL">
          <input
            type="text"
            name="url"
            value={search}
            placeholder="Search websites..."
            onChange={handleSearchChange}
          />
        </div>
        <div className="websiteHeaderColumn whcR">
          <Button dark onClick={showOverlay}>
            <TbWorld />
            Add Website
          </Button>
        </div>
      </WebsteListHeaderContainer>
    </>
  );
};

export default WebsitesListHeader;
