import { useState, useRef } from "react";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";

const FilterSelect = ({ searchAction, filterOptions }) => {
  const [filterCategory, setFilterCategory] = useState(false);

  const categoryButton = useRef();

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
    <div className="websiteFilterContainer">
      <button
        ref={categoryButton}
        className="websiteFilterOptions"
        onClick={handleFilterCategory}
      >
        {filterOptions.options[0]}{" "}
        {filterCategory ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
      </button>
      {filterCategory && (
        <div className="filterOptions">
          {filterOptions.options.map((option) => {
            return (
              <button
                name={filterOptions.name}
                category={option}
                filter={option === "All" ? "" : option.toLowerCase()}
                onClick={handleChangeFilter}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterSelect;
