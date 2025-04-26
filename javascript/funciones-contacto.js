const nav = document.querySelector("nav"); //Se selecciona el nav del header, que es el contenedor principal del menú
const abrir = document.querySelector(".abrir"); //Esto servirá para que, al hacer clic, se abra el menú desplegable
const cerrar = document.querySelector(".cerrar"); //Esto servirá para que, en el menú desplegable, se pueda ocultar y volver a la pantalla de inicio

//Al botón abrir de agrega un event listener. Cada vez que se haga click en el botón de abrir, se abra el menú desplegable. Se usa el add - classList para agregar la clase escrita en el css

abrir.addEventListener("click", () => {
    nav.classList.add("desplegado");
});
//Al botón cerrar se le agregó también un event listener. Cada vez que se haga click en la crux (x), se ocultará el menú desplegable.
cerrar.addEventListener("click", () => {
    nav.classList.remove("desplegado");
});
//noté que al hacer scroll en el menú desplegable, se hacía scroll a la nada porque el menú es corto y éste recorría todo el alto de pantalla. Asi que he utilizado este codigo de js para esconder el 'overflow' y que permita no hacer scroll a la pantalla. 
document.querySelector(".abrir").addEventListener("click", () => {
    document.body.style.overflow = "hidden";
});
document.querySelector(".cerrar").addEventListener("click", () => {
    document.body.style.overflow = "auto";
});

