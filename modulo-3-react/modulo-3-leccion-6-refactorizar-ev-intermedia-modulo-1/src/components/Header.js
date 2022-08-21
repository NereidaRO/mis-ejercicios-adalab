import "../styles/components/Header.scss";
import Logo from "./Logo.js";
import Menu from "./Menu.js";

const Header = () => {
  return (
    <div>
      <header className="header">
        <Logo />
        <Menu />
      </header>
    </div>
  );
};

export default Header;
