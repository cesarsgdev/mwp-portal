import { useState, useRef } from "react";
import { Button } from "../styled/Button.styled";
import { TbWorld } from "react-icons/tb";
import { WebsteListHeaderContainer } from "../styled/WebsiteListHeaderContainer";
import {
  IoCaretDownOutline,
  IoCaretUpOutline,
  IoFilterOutline,
} from "react-icons/io5";
import { BiSortAlt2 } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { HiPlusSm, HiPlus } from "react-icons/hi";
import FilterSelect from "../FilterSelect";

const WebsitesListHeader = ({ showOverlay, searchAction }) => {
  const [search, setSearch] = useState("");
  const filterOptions = {
    name: "category",
    placeholder: "Select category",
    options: [
      { label: "All", value: "" },
      { label: "WordPress", value: "wordpress" },
      { label: "Woocommerce", value: "woocommerce" },
    ],
  };

  const sortOptions = {
    name: "sort",
    placeholder: "Sort by",
    options: [
      { label: "URL (asc)", value: ["url", "asc"] },
      { label: "URL (desc)", value: ["url", "desc"] },
      { label: "Date created (asc)", value: ["createdAt", "asc"] },
      { label: "Date created (desc)", value: ["createdAt", "desc"] },
      { label: "Date modified (asc)", value: ["updatedAt", "asc"] },
      { label: "Date modified (desc)", value: ["updatedAt", "desc"] },
    ],
  };

  const handleSearchChange = (e) => {
    setSearch((prevSearch) => e.target.value);
    searchAction(e);
  };

  return (
    <>
      <WebsteListHeaderContainer>
        <div className="websiteHeaderColumn whcL">
          <BsFilter className="filterSortIcons" />
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

          <BiSortAlt2 className="filterSortIcons" />

          <FilterSelect
            searchAction={searchAction}
            filterOptions={sortOptions}
          />
        </div>

        <div className="websiteHeaderColumn whcR">
          <Button onClick={showOverlay}>
            <HiPlus />
            Add Website
          </Button>
        </div>
      </WebsteListHeaderContainer>
    </>
  );
};

export default WebsitesListHeader;
