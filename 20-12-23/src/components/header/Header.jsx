import "./index.css";

const Header = () => {
  return (
    <nav className="Header">
      <div className="Header__wrapper">
        <div className="Header__profile">
          <img
            src="https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU"
            alt=""
          />
        </div>
        <div className="Header__logo">
          <img src="https://img.logoipsum.com/225.svg" alt="" />
        </div>
        <div className="Header__actions">⚙️</div>
      </div>
    </nav>
  );
};

export default Header;
