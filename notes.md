# Que es el DOM?

> Ojo, inicia todo con npm run start

link: https://platzi.com/clases/dom/

Todos los navegadores lo utilizan para renderizar y trabjar sobre una página web

Todo inicia con el proceso llamado Critial Rendering Path

El código que enviamos se convierte en pixeles en las pantallas de los usuarios

El navegador crea 2 arboles
- Dom: document Object Model
- CSSOM: Css object model

Dom es el arbol para el HTML
y CSSOM es el arbol para el CSS

Acuerdate de los nodos

HTML
  HEAD
    TITLE -> Platzi
  BODY
    H1 -> Curso Manipulación DOM
    P -> Welcome welcome

Html va a head, head a title, title a platzi

Entonces el DOM es...

  - Una represencación del HTML

  - Una estructura en forma de árbol de nodos

  - Un modelo que puede ser modificado

# Web APIs modernas

Dom + JS = Web API

Las APIs las usamos en cada momento

Una API es un puente que nos permite comunicar un pedazo de software con otro

Nos permite conectar el DOM con JS para modificarlo a nuestro deseo

Más de 70 Web APIs, DOM es solo una de ellas

Existen para animaciones, manejar archivos, cosas advancadas, videos, manejo de videojuegos, y realizar pagos sin depender de librerias o servicios externos

La forma en la que trabajas con APIs va a ser a traves de dos preguntas

Como lo uso? -> developer.mozilla.org

Puedo usarlo? -> caniuse.com

Si una API existe no quiere decir que todos los navegadores lo permitan usar

Chrome siempre experimenta, pero los otros navegadores no estan de acuerdo con Chrome o van a su misma velocidad, caniuse.com nos avisará sobre el soporte de las APIs entre navegadores

*APIs de terceros*
Twitter, por ejemplo, nos proporciona una manera sencilla de mostrar tweets de algún usuario a través de su API. Tan solo tenemos que hacer una petición GET al siguiente Endpoint:

GET https://api.twitter.com/2/users/:id/tweets

APIs de servicios
Si quisieramos mostrar mapas de Google Maps, tambien podriamos hacerlo a través de su API.

Por ejemplo, para mostrar la ubicación de Sydney, New South Wales, Australia, lo haríamos de la siguiente manera:

```js
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
```

# Leer nodos

¿Cómo vamos a leer nodos?

Tenemos los 3 reyes:

```js
-> document.getElementByID
-> parent.getElementByTagName
-> parent.getElementByClassName
```
document.getElementByID: Para obtener un elemento por su ID

parent.getElementsByTagName: Para obtenerlo por el nombre de las etiquetas

parent.getElementByClassName: Para obtenerlo por el nombre de la clase

Iniciamos en la consola
```js
document.getElementById('firstName')
<input type=​"text" class=​"form-control" id=​"firstName" placeholder value required>​  
```
Recuerda que el ID es único, así que te devolverá un elemento

```js
document.getElementsByTagName('input');
```
Te va a devolver un montón de elementos, como 17, porque hay mas de 1 etiqueta

```js
document.getElementsByClassName('form-control')
HTMLCollection(12) [input.form-control, input#firstName.form-control, 
```
Te devolverá 12 elementos con esa clase

Pero hoy día tenemos dos selectores mejores que los anteriores
```js
-> parentElement.querySelector
-> parentElement.querySelectorAll
```
Respecto q querySelector() Es un selector que te permite elegir cualquier cosa que uno especifique
```js
document.querySelector('input')
<input type=​"text" class=​"form-control" placeholder=​"Promo code">​
```
Esto esta ligado a los selectores de CSS, si quisiera un id para css
```js
document.querySelector('#address')
<input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">
```
querySelector va a devolver únicamente el primer elemento que encuentre, en este caso la primera clase que sea tipo .form-control

```js
document.querySelector('.form-control')<input type="text" class="form-control" placeholder="Promo code">
```
querySelector acepta cualquier tipo de selector, puedes traerte un div con una clase "invalid-feedback"

```js
document.querySelector('div[class="invalid-feedback"]')
<div class="invalid-feedback"> Valid first name is required.</div>
```
Usaremos querySelectorAll cuando queramos traernos todos los elementos con ese selector 

Intentemos de nuevo con input, no queremos uno, queremos todos, entonces 
```js
document.querySelectorAll('input')
NodeList(17) [input.form-control, input#firstName.form-control, 
```
Y nos devolverá una Node List de 17 elementos con todos los elementos con ese selector

Si le aplicamos a las clases
```js
document.querySelectorAll('.mb-3')
NodeList(4)
```
Nos dirá que hay 4 clases con el selector '-mb-3'
```js

```

# NodeLists vs Arrays

Un nodelist es diferente a un array

```js
  const nodeList = document.querySelectorAll('div')
```
Un nodelist se parece visualmente y tiene algunas características como length y forEach

Sin embargo, carece de métodos como .map, .some, .filter, .reduce

Pero esto lo podemos solucionar de tal manera que pasamos un NodeList a un Array
```js
  const nodeListArray = [...nodeList]
```
Usamos lo ... para hacer la transformación, entonces le dirás al navegador a convertir nodeLista a un array

# Crear y agregar nodos

*Crear nodos*

Tenemos básicamente de 2 tipos, podemos crear un elemento o un texto
```js
-> document.createElement
-> document.createTextContent
```
Para crear un elemento con .createElement sería:
```js
document.createElement {
  "ELEMENTO"
}
```
En "" le deicmos la etiqueta que queremos crear
```js
document.createElement {
  "DIV"
}
```
```js
document.createElement {
  "H1"
}
```
El eso que lo creemos, no quiere decir que se añada al DOM

Esta creación sucede en memoria, lo asignamos a una variable pero nunca lo hemos agregado
```js
document.createTextNode {
  "TEXTO"
}
```
Pasamos el texto que queramos añadir, no será mas que un texto y no tendrá un otro significado

Pero debemos aprender a agregar nodos

*Agregar nodos*
```js
-> parentElement.appendChild
-> parentElement.append
-> parentElement.insertBefore
-> parentElement.insertAdjacentElement
```

*appendChild()*
parentElement.appendChild() agrega un hijo al final de algún elemento

El appendChild necesitas un nodo de referencia y el nodo que vas a agregar

Se guarda los nodos en una variable para luego añadirles texto u otros elementos

```js


// Obtengo el elemento padre
const parentElement = document.querySelector("selector")
// Creo el nodo a insertar
const h3 = document.createElement("h3")
// Creo el texto del nodo
const texto = document.createTextNode("Hola!")
// Inserto el texto al nodo
h3.appendChild(h3)
// Inserto el nodo al padre
parentElement.appendChild(h3)
```

*append()*

append es la evolución de appendChild

Puedes pasarle muchos nodos y todos los va a agregar al final

Le puedes añadir un texto

Y append() no funciona bien en IE 

```js
// Obtengo el elemento padre
const parentElement = document.querySelector("selector")
// Agrego al elemento padre
parentElement.append("agrego un texto", document.createElement("div"))
```
Ojo, esto no funciona en IE, para darle soporte debes crear un polyfill o bloquear IE
https://developer.mozilla.org/es/docs/Web/API/ParentNode/append#polyfill

*inserteBefore()*

Esto inserta antes del nodo que pasemos de referencia

```js
document.insertBefore(node, referencia)
// Obtengo el elemento padre
const parentElement = document.querySelector("selector")
// Creo un elemento
const titulo = document.createElement("h1")
// Obtengo la referencia del elemento del que quiero insertar antes:
const referencia = document.querySelector("selector")
// ¡Lo insertamos!
parentElement.insertBefore(titulo, referencia)
```
En insertBefore la referencia va antes del nodo que se va a añadir

El nodo de referencia debe ser hijo directo del padre

*insertAdjacentElement*

Es uno de los mas poderosos y flexibles que puedes usar

Debes definit cual es tu referencia, haslo con una variable

Y a partir de la referencia usarás insertAdjacentElement

beforebegin: Lo inserta antes del nodo

afterbegin: Lo inserta despues del nodo

beforeend: Lo inserta antes de donde finaliza el nodo

afterend: Lo inserta después de donde finaliza el nodo


```js
// Obtengo el elemento padre
const parentElement = document.querySelector("selector")
// Creo un elemento
const nodo = document.createElement("span")
parentElement.insertAdjacentElement("beforebegin", nodo)
```

# Otras formas de agregar ⚠

```js
-> node.outerHTML (leer)
-> node.innerHTML (escribir)
```

Con outerHTML obtenemos el elemento y lo leemos para almacenarlo en alguna variable

Con innerHTML logramos escribir 

El problema con innerHTMl es que lo escirbe tal cual como HTMl, es decir, se puede ejcutiar etiquetas propias de HTML como strong. Sin embargo, también se puede introducir inserciones XSS, osea código maligno. 

Es recomendable siempre remover carácteres especiales de los inputs de los usuarios. Es decir pasarlo por un proceso de sanitise.


*hack:* Cuando en el inspector de elementos seleccionas un elemento y en la consola escribes $0, este te devolverá el elemento tal como si lo hubieses seleccionado con document.querySelector().


# Atributos y propiedades

Los atributos y propiedades le dan vida al DOM, lo que normalmente hacemos en el DOM, es cambiar las propiedades de un elemento para adecuarlos a nuestras necesidades

Los atributos son el estado inicial de HTMl donde se renderizan

type , class, id, placeholder son atributos que componen un elemento (input)

Las propiedades son lo que vamos a cambiar con JavaScript

Podemos acceder a ellas por medio de $0.atributo

Hay propiedades como className, name, value y etc

La diferencia es que los atributos son usados solamente al inicio del HTML, mientras que las propiedades cambian según se modifiquen.

Podemos modificar el value de un input mediante .value, y cambiará en la ventana del navegador, pero no se verá cambio en el inspector de elementos del DOM

Recuerda: 
  Atributos -> inicio
  Propiedades -> Cambia

```js
// Al seleccionar el nodo HTML, JavaScript lo convierte en un objeto!
const input = document.querySelector("input")

// Y of course, podemos modificarlo como cualquier otro objeto de JavaScript:
input.placeholder = "Escribe algo"
input.value = 2
input.type = "number"


//Y otro ejemplo: 
// 👀 Lectura
console.log(inputName.value) // "Fer"
// 📝 Modificación
inputName.value = "Fernando"
```

# Eliminar nodos

```js
-> parentElement.removeChild
-> parentElement.remove
-> parentElement.replaceChild
```

*.removeChild*
Eliminamos a un nodo según el método que proviene del padre como referencia y pasamos el nodo a eliminar

```js
const nodoAEliminar = $0
const padre = $0 //Es su elemento padre directo

padre.removeChild(nodoAEliminar)
```

con $0.parentElement podemos acceder al padre directo y podemos combinarlo de tal manera:
 
```js
$0.parentElement.removeChild($0)
```

*Remove*
Es la evolución de removeChild, no es soportado en IE 
```js
const nodoAEliminar = document.querySelector('h2')
nodoAEliminar.remove()
```

*Replace Child*
Reemplazamos un nodo por otro
```js
padre.replaceChild(nuevoNodo, aRemplazar)
```

Creamos una variable donde almacewnamos al padre, otra para el nuevo nodo a añadir y otra  sobre la del nodo que vamos a reemplazar

```js
const padre = $0
const toReplace = document.querySelector('h2')
const nodo = document.createElement('h1')
nodo.textContent = "Form checkout"
padre.replaceChild(nodo, toReplace)
```

# Operaciones en lote 

Hacer operaciones en el dom no es gratuito y al trabajar con librerias, es costoso hacer operaciones en el DOM

Entre menos operaciones se realice en el DOM, más rápida va a ser la aplicación

```js
// Forma no optima
for (let i = 0; i < 100; i++){
    const node = document.createElement('input')
    document.body.appendChild(node)
}
//No es optimo, por lo que a cada rato ejecutamos appendChild, hacemos que el DOM se modifique 100 veces, podemos hacer que se modifique una sola vez con append

const nodos = []

for (let i = 0; i< 100; i++) {
    const node = document.createElement('input')
    nodos.push(node)
}
//100

nodos
//(100)[input...]

document.body.append(...nodos)
//ES6, con spread operator, le decimos que le pase lo que hay en nodos directamente a append
```

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator

*Tip: Que es el Spread Operator?*
El spread operator trabaja con arreglos y objetos, cuando lo pasamos en la llamada a una función, lo que hará es deconstruir ese arreglo y lo pasará como parámetros individuales para la función… aquí un ejemplo para que me entiendas:

```js
function funcionQueRecibeTresParametros(param1, param2, param3) {
	// code...
}

// La forma normal de llamarla sería:
funcionQueRecibeTresParametros(1, 2, 3)

// Pero, ¿qué pasa si tengo un arreglo que contiene esos 3 parámetros?
const arregloDeParametros = [1, 2, 3]

// Bueno, pues el spread operator puede deconstruir ese arreglo y poner cada elemento en donde irían mis parámetros :D!
funcionQueRecibeTresParametros(...arregloDeParametros)

// Eso sería equivalente a esto:
funcionQueRecibeTresParametros(arregloDeParametros[0], arregloDeParametros[1], arregloDeParametros[2])
```


# Workshop #1

Leeremos la API de un server para renderizar la información que nos da utilizando los métodos que nos da

Es una API que nos devuelve una colección de paltas y la renderizamos en el navegador

Tip: Leer la documentación de la API de fetch() del navegador, es muy útil y puede ayudarles a entender cosas muy útiles:
.
https://developer.mozilla.org/es/docs/Web/API/Fetch_API

```js
const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app')

appNode.addEventListener("click", (event) => {
  if(event.target.nodeName === 'H2'){
    window.alert("hola")
  }
} )

//web api - fetch, es para traer recursos de una pagina web, solo podemos pasarle una url

//1 - Conectarnos al servr
//2 - Procesar la respuesta y convertirla en JSON
//3 - JSON -> Data -> Renderizar la infor en el browser


//Intl - Api de internacionalizacion
//1 - Dar formato a fechas
//2 - Dar formato a monedas

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: "USD",
  }).format(price);

  return newPrice;

};


window
  .fetch(`${baseUrl}/api/avo`)
  .then((response) => response.json())
  .then ((responseJson) => {
    const todosLosItems = []
    responseJson.data.forEach((item) => {
      //crear imagen
      const image = document.createElement('img')
      image.src = `${baseUrl}${item.image}` 
      image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"

      //crear titulo
      const title = document.createElement('h2')
      title.textContent = item.name
      // title.style.fontSize = '3rem'<;  cambias elementos como un objeto o propiedad
      //title.className = 'muy-grande';  creas clases para un nodo
      title.className = 'text-lg'
  

      //crear precio
      const price = document.createElement('div')
      price.textContent = formatPrice(item.price);
      price.className = "text-gray-600"
      
      
      const priceAndTitle = document.createElement('div');
      priceAndTitle.className = "text-center md:text-left";
      priceAndTitle.append(title, price);
      
      const card = document.createElement("div");
      card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
      card.append(image, priceAndTitle)

      todosLosItems.push(card)
    });
    appNode.append(...todosLosItems)
  });


//https://stackoverflow.com/questions/35835362/what-does-dollar-sign-and-curly-braces-mean-in-a-string-in-javascript

//className, creas clases
//classList, añades o borras clases

//baseUrl: 'https:// robmvsk.github.io/workshop-1-fetch',
 
```


# Reaccionar a lo que sucede en el DOM

```js
-> node.addEventListener()
//Para escuchar eventos
-> node.removeEventListener()
//Para remover eventos

```

```js
elemento.addEventListener(
  "tipo de evento", 
  acción (función) )
```

```js
const miFuncionManejadora = () => {
    alert("Me has clickado 😄")
};

button.addEventListener("click", miFuncionManejadora) // Presta atención como la estamos mandando sin paréntesis, porque de esa forma solo le pasamos la referencia de la función, si le pusieramos paréntesis entonces la estaríamos ejecutando

```

```js
//click es solo click
//input es escribir
```


```js
input.addEventListener('input', (event) => {
  console.log(event)
})
```

Podemos tener 2 eventos para el mismo nodo, si queremos remover uno usamos el removeEventListener
```js
node.removeEventListener("tipo de evento",evento)
```

```js
elemento.removeEventListener(
  "tipo de evento", 
  acción (función) )
```


```js
const accion = () => {

}
```

# Event propagation

El Dom renderiza un arbol de forma grafica

Los eventos suceden desde el elmento mas interno hasta afuera

Si ese boton tiene un listener, se va a propagar en cada uno de los padres de ese botón

Ese efecto se le llama bubbling, como burbujas hacia arriba o hasta el padre

 la propagación de eventos se produce cuando tienes puestos algunos eventos en contenedores que son hijos de otro, por ejemplo:

```js
<div id="div1">
    <div id="div2">
        <div id="div3">
            Hola
        </div>
    </div>
</div>
```
Si le ponemos un event listener a los 3 divs, y clicas dentro del div 3, también estás clicando el div2 (porque el div3 está dentro del div2), y a su vez estás clicando el div1 (porque estos 2 divs están dentro de div1), por tanto, el evento se va a propagar hacia los 3 divs.

Pero esto se puede detener con stopPropagation()

```js
  $0.addEventListener("click", (event) => {
      event.stopPropagation()
  });
```

# Event Delegation

Si le añadimos eventos a una clase o una variable que se repita, podemos tener miles de eventos

Mejor es ir al padre y escuchar los eventos que suceda ahí

Por ejemplo al padre contenedor

Así tendremos un evento para varios nodos como por ejemplo

```js
//appNode es un contenedor
appNode.addEventListener("click", (event) => {
  if(event.target.nodeName === 'H2'){
    window.alert("hola")
  }
} )
```

Delegas a un solo nodo (el padre) todos los eventos que pasen por esa zona

# Workshop 2: Lazy loading

Básicamente la carga perezosa para optimizar la carga de paginas web

Haremos:

  1. HTML (imagenes)

     Como máximo 122 zorros
     https://randomfox.ca/images/1.jpg 
    
  2. Imagenes HTML -> JS

  3. Eventos - DOM 


El indexjs
```js
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
```

el laxyjs
```js
//como es instancia se debe guardar en una variable
// const observer = new IntersectionObserver(funcionQueHacerPorImagen)
//se intersecta cuando se ve parcialmente una imagen oen su totalidad

const isIntersecting = (entry) => {
  return entry.isIntersecting //va a salir true dentro de la pantalla, false si no
}

const loadImage = (entry) => {
  const container = entry.target //container (DIV)
  //desregistra la imagen o deja de escucharla (unlisten)
  const imagen = container.firstChild
  const url = imagen.dataset.src
 
  
  //cargue imagen
  imagen.src = url

  observer.unobserve(container)
  // imagen.src = `https://randomfox.ca/images/${random()}.jpg` 
};


const observer = new IntersectionObserver((entries) => {
  entries
    .filter(isIntersecting)
    .forEach(loadImage)
})


export const registerImage = (imagen) => {
  //IntersectionObservador -> observar (imagen), que escuche las imagenes
  observer.observe(imagen)
}
```


## Intersection observer

Nos permite saber cuando un elemento se interseca con el viewport

## Lazy loading

Los atributos data-cualquiercosa sirven para definir atributos personalizados dentro de HTML, es decir, puedes inventarte atributos, yo los he usado desde siempre porque son muy útiles para pasar datos entre HTML y JavaScript, su sintaxis consta en que SIEMPRE deben iniciar con data- y después de eso puedes poner cualquier cosa: data-este-es-un-atributo-data-personalizado, y se pueden usar de esta manera:

```js
<div id="myDiv" data-atributo="hola" data-un-atributo="el-valor-del-atributo">Hola 😄</div>
```

De esta forma podemos tener atributos personalizados en HTML:
.
Atributos personalizados en HTML5, más datos con un simple “data-…”
.
La forma de acceder a estos elementos desde JavaScript es mediante la propiedad dataset, esta propiedad contiene la lista de todos los atributos personalizados que le pusiste a tu elemento:

```js
const atributo = myDiv.dataset.atributo; // hola
```

Para los atributos que tienen más de un guion, JavaScript es inteligente y los convierte a camel case 🐫:

```js
const unAtributo = myDiv.dataset.unAtributo; // el-valor-del-atributo
```
## Resultado

*Pendiente* 
El proyecto debe decir cuantas imagenes hay y cuantas estan siendo cargadas 

Agregar un recuadro gris antes que carguen, las img deben cargar encima

Agregar un boton que limpie el html de las imagenes


# Worksop 3
link: https://platzi.com/clases/2193-dom/34878-proyectos-propuestos/

Ideas:
-> Reproductor de video
-> Aplicación del clima

*Reproductor de video:*
-> Elementos: <video> y <source>
-> Propiedades: play(), pause(), mute()
-> Eventos: play, complete,...

*Aplicación del clima*
Puedes escribir el nombre de una ciudad, pero que cuando presiones enter, la app va a ir a una API y según esa ciudad va a traer el clima y lo va a renderizar con gráfico y número

-> API: openweathermap.org
-> Eventos: submit, input, click, ...

# Y JSX?

Parece que escribimos HTML desde React, pero solo es manipulación del DOM 

Hmmm