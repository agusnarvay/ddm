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

//galeria modal de las imagenes en las cajas de productos

const caja = document.getElementById("caja"); //selecciona la caja del contenedor para hacer la galeria modal 
const imgAmpliada = document.querySelector(".img-ampliada"); //selecciona las <img> dentro de la caja
const cerrarCaja = document.querySelector(".cerrar-caja"); //selecciona el boton de cierre para cerrar la galeria

const imagenes = document.querySelectorAll("article.producto img"); //esto es muy importante. selecciona TODAS las imagenes que están dentro del articulo con class producto, porque estas son las imagenes que quiero que se puedan ampliar

imagenes.forEach(imagen => { //recorre todas las imagenes y agrega el evento a cada una
    imagen.addEventListener("click", () => {
        const src = imagen.getAttribute("src"); //ruta de la imagen
        const alt = imagen.getAttribute("alt"); //texto de la imagen
//asigna la img clickeada como fuente de la imagen ampliada
        imgAmpliada.setAttribute("src", src); 
        imgAmpliada.setAttribute("alt", alt);

        caja.classList.add("visible"); //.visible se encuentra en el css y js lo que hace es activarlo con el evento -> click
    });
});
cerrarCaja.addEventListener("click", () => { //evento para cerrar la galeria con la X
    caja.classList.remove("visible");
});

caja.addEventListener("click", evento => { //esto me ha costado hacerlo. Al principio lo hacía sin el target pero no funcionaba. Como realmente quería que este evento suceda, busqué tanto en W3Schools y Chatgpt que me han dado la solución y la explicación de 'target'. Esto permite que pueda salir de la galería clickeando fuera de la imagen. 
    if (evento.target === caja) { //esto asegura que el click sea fuera de la imagen y no en la imagen o en la X. 
        caja.classList.remove("visible"); //hace que el estilo .visible desaparezca luego de cerrar la galeria. 
        return;
        
    }});
