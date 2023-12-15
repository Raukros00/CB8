import CardList from "./components/cardList/CardList";
import Header from "./components/header";
import Hero from "./components/hero";
import Carousel from "./components/carousel";
import Footer from "./components/Footer/Footer";
import gear from "./assets/gear.png";
import "./App.css";

function App() {
  const imagesList1 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?1",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?2",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?3",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?4",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?5",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?6",
      title: "Image card",
    },
  ];
  const imagesList2 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?10",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?21",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?31",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?41",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?51",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?61",
      title: "Image card",
    },
  ];

  const carouselImagesList = [
    {
      id: 1,
      img: "https://picsum.photos/1920/1080?1",
      title: "Image carousel",
    },
    {
      id: 2,
      img: "https://picsum.photos/1920/1080?2",
      title: "Image carousel",
    },
    {
      id: 3,
      img: "https://picsum.photos/1920/1080?3",
      title: "Image carousel",
    },
    {
      id: 4,
      img: "https://picsum.photos/1920/1080?4",
      title: "Image carousel",
    },
    {
      id: 5,
      img: "https://picsum.photos/1920/1080?5",
      title: "Image carousel",
    },
    {
      id: 6,
      img: "https://picsum.photos/1920/1080?6",
      title: "Image carousel",
    },
    {
      id: 7,
      img: "https://picsum.photos/1920/1080?7",
      title: "Image carousel",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Hero
        image={gear}
        title="Engineer brain on work"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, accusamus? Nam ducimus eos itaque nesciunt magnam
            asperiores mollitia deserunt fuga officia nostrum ab quas possimus
            quis quisquam reprehenderit, est nisi?"
        textButton="Calm him down"
      />
      <CardList
        cardListObj={{ title: "Indie movies ecc...", list: imagesList1 }}
      />
      <CardList cardListObj={{ title: "Fantasy", list: imagesList2 }} />
      <Carousel carouselImagesList={carouselImagesList} />
      <Footer />
    </div>
  );
}

export default App;
