import { NewTaskContext } from "./context/NewTaskContext";
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
import { useContext } from "react";

const Categories = () => {
  const context = useContext(NewTaskContext);
  return (
    <>
      <div className="animationWrapper">
        <h1>What's your task category? with context</h1>
        <section className="taskCategories">
          <CategoryItem name="New Site" image={newSite} />
          <CategoryItem name="New Features" image={newFeatures} />
          <CategoryItem name="New blog post" image={newBlog} />
          <CategoryItem name="Styling CSS" image={style} />
          <CategoryItem name="Installation & Setup" image={installation} />
          <CategoryItem name="Updates" image={updates} />
          <CategoryItem name="Migrations" image={migration} />
          <CategoryItem name="Backups" image={backup} />
          <CategoryItem name="Security" image={security} />
          <CategoryItem name="Optimization" image={optimzation} />
          <CategoryItem name="Consulting / Questions" image={consulting} />
          <CategoryItem name="Other" image={other} />
        </section>
      </div>
    </>
  );
};

export default Categories;
