import { useState, useEffect } from "react";
import BookList from "../../components/bookList";
import { HTTP_GET } from "../../utils/http";
import styles from "./index.module.scss";
import SearchInput from "../../components/searchInput/";
import NavBar from "../../components/navBar";

export default function Homepage() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    Promise.all([
      HTTP_GET("/subjects/love.json"),
      HTTP_GET("/subjects/war.json"),
      HTTP_GET("/subjects/adventure.json"),
    ]).then((data) => setLists(data));
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.Homepage}>
        <div className={styles.BookList}>
          <SearchInput />
          {lists.map((list, i) => (
            <BookList
              bookListData={list.works}
              title={list.name.toUpperCase()}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}
