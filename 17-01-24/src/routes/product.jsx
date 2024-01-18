import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/navBar";
import ProductGallery from "../components/productGallery";
import ProductInfo from "../components/productInfo";
import styles from "../index.module.scss";
export default function Product() {
  const { productId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.Product}>
        <div className={styles.ProductWrapper}>
          <ProductGallery product={product} />
          <ProductInfo product={product} />
          {/* <h1>{product.title}</h1>
      <h3>{product.brand}</h3>
      <img src={product.thumbnail} alt={product.title} />
      <strong>{product.price} $</strong>
      <br />
      <strong>{product.discountPercentage} %</strong>
      <p>{product.category}</p>
      {
        product.images && product.images.map(image => <img src={image} alt={image} key={image} />)
      } */}
        </div>
      </div>
    </>
  );
}
