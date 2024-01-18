import { useState } from "react";
import styles from "./index.module.scss";

const ProductGallery = ({ product }) => {
  const [image, setImage] = useState("");

  const onHandleImgClick = (e) => {
    setImage(e.target.src);
  };

  return (
    <div className={styles.Gallery}>
      <div className={styles.MainImage}>
        <img src={image !== "" ? image : product.thumbnail} alt="" />
      </div>
      <div className={styles.GalleryImage}>
        {product.images &&
          product.images.map((image) => (
            <img
              src={image}
              alt={image}
              key={image}
              onClick={onHandleImgClick}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductGallery;
