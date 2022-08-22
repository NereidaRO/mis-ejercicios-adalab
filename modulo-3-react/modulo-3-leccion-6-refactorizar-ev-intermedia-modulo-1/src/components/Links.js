const Links = (props) => {
  const typeTarget = props.openInNewTab ? "_blank" : ""; //si es true ponme "_blank"
  return (
    <li className={props.text}>
      <a
        className="link-nav"
        href="https://adalab.es/blog/"
        target={typeTarget}
      >
        {props.text}
      </a>
    </li>
  );
};

/*¿Qué es eso de typeTarget? Lo de poner una constante en un atributo de una etiqueta HTML no es nuevo,
recuerda que eso se hace cuando quieres variar una clase y cosas así, como hacíamos en el juego del ahorcado 
del modulo 3 o en las paletas del módulo 2. En este caso, ese atributo está regido por una condición,
escrita en un ternario. Esa condición tiene, a su vez, la posibilidad de que una props (que es lo nuevo de
esta lección, lo que luego se define en la madre, propiedades), sea true (en cuyo caso se cambiará por "_blank"
o que sea false (en cuyo caso se cambiará por ""). Así se hace una props BOOLEANA*/

export default Links;
