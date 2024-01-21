import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./index.module.scss";
import { HTTP_GET } from "../../utils/http";
import { Link } from "react-router-dom";
import NavBar from "../../components/navBar";

export default function Book() {
  const { bookId } = useParams();
  const [bookInfo, setBookInfo] = useState({});

  useEffect(() => {
    HTTP_GET(`/search.json?q=${bookId.replaceAll(" ", "+")}`).then((data) =>
      setBookInfo(data.docs[0])
    );
  }, [bookId]);

  return (
    <>
      <NavBar />
      <div className={styles.Book}>
        <div className={styles.Wrapper}>
          {bookInfo?.isbn && (
            <>
              {console.log(bookInfo)}
              <div className={styles.BookImage}>
                <img
                  className={styles.image}
                  src={`https://covers.openlibrary.org/b/id/${bookInfo.cover_i}-M.jpg`}
                  alt={bookInfo?.title}
                />
              </div>
              <h1>{bookInfo?.title}</h1>
              <h3>{bookInfo?.author_name}</h3>
              <h4>What's it about?</h4>
              <p>{bookInfo?.first_sentence[0]}</p>
              <button className={styles.BtnRead}>Read now</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
