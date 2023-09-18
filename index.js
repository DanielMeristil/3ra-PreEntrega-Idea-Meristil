//Proyecto tercera Pre-Entrega "Idea Meristil"
//Espacio Glamour - Belleza & Estética. Beauty salon.


//Utilisando "DOM" en el proyecto
//para selectionar distintas partes del proyecto.

let elemento;
elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.images;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].classlist;
elemento = document.forms[0].method;
elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].className;

console.log(elemento);



//Selectionando cada elemento por su clase.
//Espacio Glamour - Belleza & Estética. Beauty salon.
const header = document.getElementsByClassName('header');

console.log(header);

const body = document.getElementsByClassName('body');

console.log(body);

const contenedor = document.getElementsByClassName('contenedor');

console.log(contenedor);



const contenedor1 = document.querySelector('.contenedor');

console.log(contenedor);

const contenedor2 = document.querySelectorAll('.contenedor');

console.log(contenedor);



//Utilisando "DOM" para modificar estilos en el proyecto.
//Espacio Glamour - Belleza & Estética. Beauty salon.

const header2 = document.querySelector('h1');
header.style.backgroundColor = 'yellow';
header.style.fontFamily = 'arial';
header.style.textDecoration = 'uppercase';

const contenedor3 = document.querySelector('.contenedor');
contenedor.classList.add('nueva-clase');
console.log(contenedor.classList);



//Utilisando "DOM" para eleminar elemento en proyecto
//Espacio Glamour - Belleza & Estética. Beauty salon.

const primerEnlace = document.querySelector('a');
primerEnlace.remove();

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);




//Creyando enlace HTML con "DOM" desde JavaScript
//Espacio Glamour - Belleza & Estética. Beauty salon.
const enlace = document.createElement('A');
enlace.textContent = 'Nuevo Enlance';

enlace.href = '/nuevo-enlace';

console.log(enlace);

enlace.target = "_blank";

enlace.setAttribute('data-enlase', 'nuevo-enlase');

enlace.classList.add('aguna-clase');

const navegacion1 = document.querySelector('.navegacion');

console.log(navegacion.children);

navegacion.insertBefore(enlace, navegacion.children(1));


//Comenzando con "EVENTOS" en el proyecto
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validarFormulario);
function validarFormulario(e) {
    e.preventDefault();
    console.log('consultar una api')
    console.log(e.target.action);
}





//Creando Carrito de comprar en el proyecto.
//Espacio Glamour - Belleza & Estética. Beauty salon.


const carrto = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciaCarrito = document.querySelector('#vaciar-carrito');
const listaProductos = documento.querySelector('#lista-producto');
let articulosCarrito = [];

cargarEvenListeners();
function cargarEvenListeners() {
    listaProductos.addEventListener('clik',agregarProducto);

    carrto.addEventListener('clik', eliminarproducto);


//Agregando localStorage al proyecto
//Espacio Glamour - Belleza & Estética. Beauty salon.
document.addEventListener('DOMContenloaded', () => {
    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoHTML();
})

    vaciaCarritoBtn.eddEventListener('clik', () =>  {
        articulosCarrito = [];

        limpiarHTML();
    })

}

function agregarProducto(e){
    e.preventDefault();
    if( e.target.classlist.contains('agregar-carrito')){
        const productoSelecionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSelecionado);

    }
}

function eliminarproducto(e) {
    console.log('desde eliminarproducto');
    if (e.target.classlist.contains('borrar-producto')) {
        const productoId = e.target.getAttribute('data.id');

        articulosCarrito = articulosCarrito.filter( producto => producto.id !==productoId);
        carritoHTML();
    }
 }

 function leerDatosProducto(producto) {
    console.log(producto);
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h4'). textContent,
        precio: producto.querySelector('.precio span'). textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad:1
    }
    
    const existe = articulosCarrito.some( producto => producto.id === infoProducto.id )
    if(existe){
    const producto = articulosCarrito.map( producto => {
        if( producto.id === infoProducto.id) {
            producto.cantidad++;
            return producto;
        } else {
            return producto;
        }
    });
    articulosCarrito = [...productos];
 } else {articulosCarrito = [...articulosCarrito, infoProducto];

 }



  console.log(articulosCarrito);

  carritoHTML();

 }

function carritoHTML() {

    limpiarHTML();

    articulosCarrito.forEach(producto=> {
        const { imagen, titulo, precio, cantidad, id } = producto;
        const row = document.createElement('tr');
        row.innerHTML =`
        <td>
        <img src="${imagen}" width="100"
        </td>
        <td>${titulo}
        </td>
        <td>${precio}
        </td>
        <td>${cantidad}
        </td>
        <td>
        <a href="#" clase="borrar-producto" data-id"${id}" > x </a>
        </td>

       `;
        contenedorCarrito.appendChild(row);
    });

    sincronizarStorage();
}
function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))
}

function limpiarHTML() {

   while(contenedorCarrito.firstChild){
   contenedorCarrito.removeChild(contenedorCarrito.firstChild)
  }
}



//Añadiendo algunos codigos de un simulador de envio Email en el proyecto.
//Espacio Glamour - Belleza & Estética. Beauty salon.
document.eddEventListener('DOMContentLoaded', function(){

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        if(e.target.value.trim() === '') {
            mostrarAlerta(`El Campo ${e.target.id} es obligatorio`);
        } else {
            console.log('si hay algo...');
        }
    }

    function mostrarAlerta(mensaje) {
        const error = document.crearteElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'P-2', 'text-center');

        formulario.appendChild(error);
    }
});