import CategoryItem from "./CategoryItem";
import backup from "../../../categories-icons/backup.png";
import consulting from "../../../categories-icons/consulting-questions.png";
import installation from "../../../categories-icons/installation-setup.png";
import migration from "../../../categories-icons/migration.png";
import newBlog from "../../../categories-icons/new-blog.png";
import newFeatures from "../../../categories-icons/new-features.png";
import newSite from "../../../categories-icons/new-site.png";
import optimzation from "../../../categories-icons/optimization.png";
import other from "../../../categories-icons/other.png";
import security from "../../../categories-icons/security.png";
import style from "../../../categories-icons/style-css.png";
import updates from "../../../categories-icons/updates.png";

const Categories = ({ selectCategory, setCategory, formState }) => {
  return (
    <>
      <div className="animationWrapper">
        <h1>What's your task category?</h1>
        <section className="taskCategories">
          <CategoryItem
            selectCategory={selectCategory}
            setCategory={setCategory}
            name="New Site"
            image={newSite}
            formState={formState}
          />
          <CategoryItem
            selectCategory={selectCategory}
            setCategory={setCategory}
            name="New Features"
            image={newFeatures}
            formState={formState}
          />
          <CategoryItem
            selectCategory={selectCategory}
            setCategory={setCategory}
            name="New blog post"
            image={newBlog}
            formState={formState}
          />
          <CategoryItem
            selectCategory={selectCategory}
            setCategory={setCategory}
            name="Styling CSS"
            image={style}
            formState={formState}
          />
          <CategoryItem
            selectCategory={selectCategory}
            setCategory={setCategory}
            name="Installation & Setup"
            image={installation}
            formState={formState}
          />
          <CategoryItem
            selectCategory={selectCategory}
            setCategory={setCategory}
            name="Updates"
            image={updates}
            formState={formState}
          />
          <CategoryItem
            selectCategory={selectCategory}
            setCategory={setCategory}
            name="Migrations"
            image={migration}
            formState={formState}
          />
          <CategoryItem
            selectCategory={selectCategory}
            setCategory={setCategory}
            name="Backups"
            image={backup}
            formState={formState}
          />
          <CategoryItem
            selectCategory={selectCategory}
            setCategory={setCategory}
            name="Security"
            image={security}
            formState={formState}
          />
          <CategoryItem
            selectCategory={selectCategory}
            setCategory={setCategory}
            name="Optimization"
            image={optimzation}
            formState={formState}
          />
          <CategoryItem
            selectCategory={selectCategory}
            setCategory={setCategory}
            name="Consulting / Questions"
            image={consulting}
            formState={formState}
          />
          <CategoryItem
            selectCategory={selectCategory}
            setCategory={setCategory}
            name="Other"
            image={other}
            formState={formState}
          />
        </section>
      </div>
    </>
  );
};

export default Categories;
