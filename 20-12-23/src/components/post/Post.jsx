import { useEffect, useState } from "react";
import "./index.css";

const Post = ({ postData }) => {
  const { image, username, title, body, tags, reactions } = postData;
  //ESERCIZIO 2 const [userData, setUserData] = useState({});

  /** ESERCIZIO 2 **
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }, []);
  */

  return (
    <div className="Post">
      <div className="Post__user">
        <img src={image} alt="" />
        <h3>{username}</h3>
      </div>
      <h3 className="Post__title">{title}</h3>
      <p className="Post__content">{body}</p>
      <div className="Post__info">
        <div className="Post__info--gift">
          <span>💚</span>
          <span>{` ${reactions}`}</span>
        </div>
        <ul className="Post__info--categories">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Post;
