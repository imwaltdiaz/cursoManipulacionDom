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