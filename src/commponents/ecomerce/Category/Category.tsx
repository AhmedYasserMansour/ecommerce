import { Link } from "react-router-dom";
import styles from "./Category.module.css";
import { ICategory } from "@/types/Shared";
const { category, categoryImg, categoryTitle } = styles;


const Category = ({img, title, prefix} : ICategory) => {
  return (
    <div className={category}>
      <Link to= {`products/${prefix}`}>
      <div className={categoryImg}>
        <img
          src={img}
          alt={title}
        />
      </div>
      <h4 className={categoryTitle}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;