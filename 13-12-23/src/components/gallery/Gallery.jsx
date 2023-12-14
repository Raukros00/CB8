import React from "react";

const Gallery = () => {
  const gallery = [
    {
      id: 1,
      img: "https://picsum.photos/300/200?1",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/300/200?2",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/300/200?3",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/300/200?4",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/300/200?5",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/300/200?6",
      title: "Image card",
    },
    {
      id: 7,
      img: "https://picsum.photos/300/200?7",
      title: "Image card",
    },
    {
      id: 8,
      img: "https://picsum.photos/300/200?8",
      title: "Image card",
    },
    {
      id: 9,
      img: "https://picsum.photos/300/200?9",
      title: "Image card",
    },
    {
      id: 10,
      img: "https://picsum.photos/300/200?10",
      title: "Image card",
    },
  ];

  return (
    <div className="gallery">
      <div className="gallery-wrapper">
        {gallery.map((image) => (
          <img
            className="image"
            src={image.img}
            alt={image.title}
            key={image.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
