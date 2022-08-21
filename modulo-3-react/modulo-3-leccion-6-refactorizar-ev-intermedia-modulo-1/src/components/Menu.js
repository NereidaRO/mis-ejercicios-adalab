import "../styles/components/Menu.scss";
import Links from "./Links.js";

const Menu = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="ul">
          <Links text="Blog" openInNewTab={true} />
          <Links text="Contacto" openInNewTab={true} />
          {/* <li className="blog">
            <a className="link-nav" href="https://adalab.es/blog/">
              blog
            </a>
          </li>
          <li className="contacto">
            <a className="link-nav" href="https://adalab.es/contacto/">
              contacto
            </a>
          </li>*/}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
