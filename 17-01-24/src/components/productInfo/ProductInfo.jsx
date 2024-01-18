import styles from "./index.module.scss";

const ProductInfo = ({ product }) => {
  return (
    <div className={styles.Info}>
      <div className={styles.Wrapper}>
        <h1>{product.title}</h1>
        <h3>
          $<del>{product.price}</del>
          <strong className={styles.SpecialPrice}></strong> $
          {((product.price * product.discountPercentage) / 100).toFixed(2)}
        </h3>
        <small>{product.brand}</small>
        <p>{product.description}</p>
        <a className={styles.BuyBtn}>Acquista</a>
      </div>
    </div>
  );
};

export default ProductInfo;
