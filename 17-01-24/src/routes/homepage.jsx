import { useState, useEffect } from "react";
import ListProducts from "../components/listProducts/";
import CategoryFilter from "../components/categoryFilter";
import styles from "../index.module.scss";
import NavBar from "../components/navBar";

export default function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (selectedCategory === "") setProducts(data.products);
        else {
          setProducts(
            data.products.filter(
              (product) => product.category === selectedCategory
            )
          );
        }
      });
  }, [selectedCategory]);

  return (
    <>
      <NavBar />
      <div className={styles.Home}>
        <div className={styles.ProductHead}>
          <h4>
            {selectedCategory !== ""
              ? selectedCategory.toUpperCase()
              : "All products"}
          </h4>
          <CategoryFilter setSelectedCategory={setSelectedCategory} />
        </div>
        <ListProducts products={products} />
      </div>
    </>
  );
}
