import { useState, useRef } from "react";
import { Button } from "../styled/Button.styled";
import { TbWorld } from "react-icons/tb";
import { WebsteListHeaderContainer } from "../styled/WebsiteListHeaderContainer";
import { IoCaretDownOutline } from "react-icons/io5";
const WebsitesListHeader = ({ showOverlay, searchAction }) => {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState(false);

  const categoryButton = useRef();

  const handleSearchChange = (e) => {
    setSearch((prevSearch) => e.target.value);
    searchAction(e);
  };

  const handleFilterCategory = (e) => {
    setFilterCategory(!filterCategory);
  };

  const handleChangeFilter = (e) => {
    const category = e.target.getAttribute("category");
    const filter = e.target.getAttribute("filter");
    categoryButton.current.childNodes[0].textContent = category;
    e.target.value = filter;
    setFilterCategory(!filterCategory);
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
          <div className="websiteFilterContainer">
            <button
              ref={categoryButton}
              className="websiteFilterOptions"
              onClick={handleFilterCategory}
            >
              All <IoCaretDownOutline />
            </button>
            {filterCategory && (
              <div className="filterOptions">
                <button
                  name="category"
                  category="All"
                  filter=""
                  onClick={handleChangeFilter}
                >
                  All
                </button>
                <button
                  name="category"
                  category="WordPress"
                  filter="wordpress"
                  onClick={handleChangeFilter}
                >
                  WordPress
                </button>
                <button
                  name="category"
                  category="WooCommerce"
                  filter="woocommerce"
                  onClick={handleChangeFilter}
                >
                  WooCommerce
                </button>
              </div>
            )}
          </div>
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
