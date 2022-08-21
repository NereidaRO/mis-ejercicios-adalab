import "../styles/components/Header.scss";
import Logo from "./Logo.js";
import Menu from "./Menu.js";

const Header = () => {
  return (
    <div>
      <header className="header">
        {/*<Logo />*/}
        <a href="https://adalab.es/">
          <img
            className="logo"
            src="../images/adalab-logo-155x61.png"
            alt="logo adalab"
            title="Inicio"
          />
        </a>
        {/*<Menu />*/}
        <nav className="nav">
          <ul className="ul">
            <li className="blog">
              <a className="link-nav" href="https://adalab.es/blog/">
                blog
              </a>
            </li>
            <li className="contacto">
              <a className="link-nav" href="https://adalab.es/contacto/">
                contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
