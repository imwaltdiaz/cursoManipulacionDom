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
 