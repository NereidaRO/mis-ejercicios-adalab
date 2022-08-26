1. DESCRIPCIÓN

Este proyecto es una plantilla para proyectos de ReactJS, creada a partir de la instalación de React
mediante el comando npm install -g create-react-app.

A continuación, se instalaron algunas librerías adicionales:

- Librería para el control de rutas: se ejecutó npm install react-router-dom y, en package.json se añadió "homepage": "./"
- Librería para establecer el tipo de las props: se ejecutó npm install prop-types

También se creó un comando para publicar automáticamente en GitHub Pages, el cual va en el documento package.json ("githubpages", en el apartado de scripts), así como un archivo-plantilla para trabajar con el almacenamiento local (localStorage.js).

La intención de esta plantilla es proporcionar una base para empezar rápidamente un proyecto de React ordenado y limpio, además de proporcionar una forma de trabajar con Sass sin tener que ejecutar comandos. Forma parte de las herramientas de aprendizaje del bootcamp de programación web de Adalab.

2. FECHAS

La última modificación de esta plantilla se realizó el 26 de agosto de 2022.

3. INSTALACIÓN Y USO

Para empezar a utilizarla, se debe ejecutar npm install, que creará la carpeta node_modules; este proceso puede ser lento y la carpeta es bastante pesada. Una vez hecho esto, se levanta el proyecto con npm start.

Para actualizar la publicación en GitHub Pages, se escribe en la consola: npm run githubpages. Hay que aclarar que, si se pretende usar este apartado de GitHub, hay que cambiar "BrowserRouter" por "HashBrowser" en index.js.

3. TECNOLOGÍAS

- ReactJS
- Librerías: propTypes, react-router-dom
- HTML 5
- Sass y CSS
- JavaScript ES6
- Git

4. AUTORES

Las instrucciones de creación y la plantilla original son de Adalab. Algunas modificaciones leves, debidas a su uso, son de Nereida Rodríguez Orenes (los comentarios de App.js, el fichero Summary.txt y este README.md), estudiante de la promoción Quirós de Adalab.
