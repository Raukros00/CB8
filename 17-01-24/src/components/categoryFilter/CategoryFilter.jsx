import { useEffect, useState } from "react";
import styles from "./index.module.scss";

const CategoryFilter = ({ setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const onHandleCategoryChange = (e) => setSelectedCategory(e.target.value);

  return (
    <div className={styles.Categories}>
      <label htmlFor="">Category</label>
      <select
        className={styles.SelectCategories}
        onChange={onHandleCategoryChange}
      >
        <option value="">All</option>
        {categories.map((category, key) => (
          <option key={key} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
