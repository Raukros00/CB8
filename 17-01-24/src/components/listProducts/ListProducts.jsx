import { Link } from "react-router-dom";

import styles from "./index.module.scss";
import Product from "../product";

const ListProducts = ({ products }) => {
  return (
    <div className={styles.Products}>
      <div className={styles.Wrapper}>
        {products.map((product) => (
          <Link
            className={styles.ProductLink}
            to={`/products/${product.id}`}
            key={product.id}
          >
            <Product product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
