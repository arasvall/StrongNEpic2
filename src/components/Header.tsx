import "../style/Header.css";

const userName = "admin";

function Header(): JSX.Element {
  return (
    <header>
      <h2>Strong n' epic</h2>
      <div className="header-user">
        <p>{userName}</p>
        <div className="img"></div>
      </div>
    </header>
  );
}

export default Header;
