import { useState, useRef } from "react";
import { Button } from "../styled/Button.styled";
import { TbWorld } from "react-icons/tb";
import { WebsteListHeaderContainer } from "../styled/WebsiteListHeaderContainer";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import FilterSelect from "../FilterSelect";

const WebsitesListHeader = ({ showOverlay, searchAction }) => {
  const [search, setSearch] = useState("");
  const filterOptions = {
    name: "category",
    options: ["All", "WordPress", "WooCommerce"],
  };

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
          <FilterSelect
            searchAction={searchAction}
            filterOptions={filterOptions}
          />
        </div>

        <div className="websiteHeaderColumn whcR">
          <Button onClick={showOverlay}>
            <TbWorld />
            Add Website
          </Button>
        </div>
      </WebsteListHeaderContainer>
    </>
  );
};

export default WebsitesListHeader;
