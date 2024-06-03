
import './EventosPasados.css'

export const EventosPasados = async  () => {
  const main = document.querySelector('main')
  main.innerHTML = ' '
  const h2 = document.createElement('h2')
  const sectionAnterioresViajes = document.createElement('section')
  sectionAnterioresViajes.className = 'sectionAnterioresViajes'
  main.append(sectionAnterioresViajes)

  const res = await fetch('http://localhost:8000/api/v1/eventosPasados')
  const eventos = await res.json()
  pintarEvento(eventos,sectionAnterioresViajes)
}

const pintarEvento = (array, elementoPadre) => {
  for (const element of array) {
    const articleEventoPasado = document.createElement('article')
    articleEventoPasado.className = 'articleEventoPasado'
    elementoPadre.append(articleEventoPasado)

    const imgEventoPasado = document.createElement('img')
    imgEventoPasado.className = 'imgEventoPasado'
    imgEventoPasado.src = element.imagen
    articleEventoPasado.append(imgEventoPasado)
    
  const tituloEventoPasado = document.createElement('h3')
  tituloEventoPasado.className = 'tituloEventoPasado'
  tituloEventoPasado.innerText = element.titulo
  articleEventoPasado.append(tituloEventoPasado)
  }


}