import { useState, useEffect } from "react";
import AddPost from "./components/addPost";
import PostList from "./components/postList";
import Header from "./components/header";
import "./App.css";

function App() {
  const [postListData, setPostListData] = useState([]);

  /** AVANZATO ULTRA
   *
   * Bisogna passare come prop l'array di oggetti
   * già completo di tutte le informazioni di cui
   * necessita il componenete per popolare il post
   *
   **/

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        data.posts.map((post) => {
          fetch(`https://dummyjson.com/users/${post.userId}`)
            .then((res) => res.json())
            .then((data) => {
              const postData = {
                image: data.image,
                username: data.username,
                title: post.title,
                body: post.body,
                tags: post.tags,
                reactions: post.reactions,
              };
              setPostListData((prev) => [...prev, postData]);
            });
        });
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <AddPost setPostListData={setPostListData} />
      {postListData.length ? (
        <PostList postListData={postListData} />
      ) : (
        <div className="Loader__container">
          <span className="Loader"></span>
        </div>
      )}
    </div>
  );
}

export default App;
