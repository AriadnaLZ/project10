import { mostrarAsistentes } from '../../components/mostrarAsistentes/mostrarAsistentes'
import { NuevoAsistente } from '../../components/nuevoAsistente/nuevoAsistente'
import './ProximosEventos.css'

export const ProximosEventos = async () => {

    const main = document.querySelector('main')
    main.innerHTML = ' '
   
    const res = await fetch( 'http://localhost:8000/api/v1/eventos')
    const eventos = await res.json()
    const sectionProximosViajes = document.createElement('section')
    sectionProximosViajes.className = 'sectionProximosViajes'
    main.append(sectionProximosViajes)
    pintarEventos(eventos, sectionProximosViajes)

  }

const pintarEventos = (array, elementoPadre) => {
  for (const element of array) {
    const articleEvento = document.createElement('article')
    articleEvento.className = 'articleEvento'
    elementoPadre.append(articleEvento)

    const imgEventoProximo = document.createElement('img')
    imgEventoProximo.className = 'imgEventoProximo'
    imgEventoProximo.src = element.imagen
    articleEvento.append(imgEventoProximo)

    const divTitulo = document.createElement('div')
    divTitulo.className = 'divTitulo'
    articleEvento.append(divTitulo)
    const tituloEvento = document.createElement('h3')
    tituloEvento.className = 'tituloEvento'
    tituloEvento.innerText = element.titulo
    divTitulo.append(tituloEvento)

    const precio = document.createElement('p')
    precio.className = 'precio'
    precio.innerText = `Precio: ${element.precio}€`
    articleEvento.append(precio)

    const divDescripcion = document.createElement('div')
    divDescripcion.className = 'divDescripcion'
    articleEvento.append(divDescripcion)
    const descripcion = document.createElement('p')
    descripcion.className = 'descripcion'
    descripcion.innerText = element.descripcion
    divDescripcion.append(descripcion)



    if (localStorage.getItem('token')) {
      const divButton = document.createElement('div')
      divButton.className = 'divButtonAsistente'
      articleEvento.append(divButton)
      const buttonAsistente = document.createElement('button')
      buttonAsistente.className = 'buttonAsistente'
      buttonAsistente.innerText = 'Apúntate!'
      divButton.append(buttonAsistente)
      buttonAsistente.addEventListener('click', () => {
        const idEvento = element._id
        const tituloEvento = element.titulo
        const asistentes = element.asistentes
        NuevoAsistente(idEvento,tituloEvento, asistentes)
      })

      const divAsistentes = document.createElement('div')
      articleEvento.append(divAsistentes)
      const pAsistentes = document.createElement('p')
      pAsistentes.className = 'pAsistentes'
      pAsistentes.innerText = 'Ver asistentes'
      divAsistentes.append(pAsistentes)
      pAsistentes.addEventListener('click', () => {
        const idEvento = element._id
        const tituloEvento = element.titulo
        const asistentes = element.asistentes
        mostrarAsistentes(idEvento,tituloEvento, asistentes)
      })
    }
  }
}