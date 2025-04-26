// Definí una constante junto con un array, con una lista de colores para aplicar al título de forma dinámica, que permitirá cambiar aleatoriamente el color cada vez que cargue la página - elegí colores que 'peguen' con la estética del proyecto
const colores = ["#005DA1", "#089565", "#458bd1", "#ffffff"];
//con esta constante 'random' - Math.floor y Math.random se van a elegir 'colores' al azar - donde se obtiene un número válido dentro del array y elige uno de los colores proporcionados.
const random = colores[Math.floor(Math.random() * colores.length)];

//Para hacer esto, primero tiene que estar listo el html y el css de los elementos que voy a manipular con js / 
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("portada-titulo").style.color = random; //Aquí estoy accediendo al h1 de la portada, que su id es 'portada-titulo', con el getElementById. Se modificará su color utilizando el color aleatorio que seleccioné anteriormente. Le da cierto dinamismo y puede ser visualmente entretenido para el usuario
});
//noté que al hacer scroll en el menú desplegable, se hacía scroll a la nada porque el menú es corto y éste recorría todo el alto de pantalla. Asi que he utilizado este codigo de js para esconder el 'overflow' y que permita no hacer scroll a la pantalla. 
document.querySelector(".abrir").addEventListener("click", () => {
    document.body.style.overflow = "hidden";
});
document.querySelector(".cerrar").addEventListener("click", () => {
    document.body.style.overflow = "auto";
});

//se utilizó js para agregar el menú desplegable al responsive de max-width:550px

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
