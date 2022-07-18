import { useState, useRef } from "react";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import { AiOutlineSortAscending } from "react-icons/ai";

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
        {filterOptions.options[0].label}{" "}
        {filterCategory ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
      </button>
      {filterCategory && (
        <div className="filterOptions">
          <span className="filterPlaceholder">{filterOptions.placeholder}</span>
          {filterOptions.options.map((option, i) => {
            return (
              <button
                key={i}
                name={filterOptions.name}
                category={option.label}
                filter={option.value}
                onClick={handleChangeFilter}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FilterSelect;
