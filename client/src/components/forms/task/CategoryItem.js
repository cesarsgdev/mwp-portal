const CategoryItem = ({
  name,
  image,
  selectCategory,
  setCategory,
  formState,
}) => {
  return (
    <>
      <button
        className={`categoryButton ${
          formState?.category === name ? `categoryActive` : ``
        }`}
        name="category"
        categoryname={name}
        onClick={(e) => {
          setCategory(e);
          selectCategory();
        }}
      >
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </button>
    </>
  );
};

export default CategoryItem;
