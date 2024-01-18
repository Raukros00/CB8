import styles from "./index.module.scss";

const Product = ({ product }) => {
  const { id, title, thumbnail, price, discountPercentage } = product;

  return (
    <div className={styles.Product}>
      <div className={styles.Wrapper}>
        <img className={styles.ProductImage} src={thumbnail} alt="" />
        <div className={styles.Info}>
          <h4 className={styles.ProductTitle}>{title}</h4>
          <p>
            $<del>{price}</del>
            <strong className={styles.SpecialPrice}>
              ${((price * discountPercentage) / 100).toFixed(2)}
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
