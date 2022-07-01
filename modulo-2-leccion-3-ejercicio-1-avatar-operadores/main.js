'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.jp/150x150.png';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

/*En estos ejercicios todavía no hay eventos, las cosas se cambian a mano*/

const imgUser = document.querySelector(".user__avatar");

imgUser.src = userAvatar || DEFAULT_AVATAR ;
/*La imagen del usuario será la que haya puesto él (userAvatar) o, si no ha puesto ninguna, la imagen default*/