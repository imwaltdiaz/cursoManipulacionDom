import h from 'hyperscript'
import { registerImage } from "./lazy";

//Mi solución


// const API = "https://randomfox.ca/floof/";

// const appNode = document.querySelector('#pics');

// const button = document.querySelector('#button-image');

// const getImage = async() => {
//   try{
//     const response = await fetch(API);
//     const responseJSON = await response.json();
//     const url = responseJSON.image

//     const container = document.createElement('div') 
//     container.className = "p-4"

//     const image = document.createElement('img') 
//     image.src = url;
//     image.className = "mx-auto" 
//     image.width = "320"

      
//     container.append(image) 
//     appNode.append(container)
//   }
//   catch (err) {
//     console.log("Error", err)
//   }
// }
// button.addEventListener("click", getImage)

//La del profe  

//crear imagen
//agregar imagen

const minimum = 1;
const maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum) + minimum) 

const createImageNode = () => {

  // const imagen = document.createElement('img')
  // imagen.className = "mx-auto"
  // imagen.width = "320"
  // imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg` 
  //No trabajamos con url para que no cargue directamente la pagina, el trabajo se lo dejamos a lazy loading
  //dataset se usa para comunicar info entre html y js

  //pero con hyperscript
  const imagen = h('img.mx-auto', {
    width: '320',
    "data-src": `https://randomfox.ca/images/${random()}.jpg`,
  })
  const container = document.createElement ("div")
  container.className = "p-4";
  //Escribiendolo con hyperscript...
  container.appendChild(imagen)
  //en vez de appendChild usemos hyperscript


  // const container = jsx('div.p-4.mt-3', imagen)
  // jsx -> html (React), en React.createElement sería similar utilizando algo como...
  // const container = <div className = "p-4 mt-3"><imagen /></div>




  return container;
};

//Ahora una nueva img

const nuevaImagen = createImageNode()
const mountNode = document.getElementById("pics");

const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage)
  registerImage(newImage);
};

const addButton = document.querySelector('button')
addButton.addEventListener("click", addImage)

