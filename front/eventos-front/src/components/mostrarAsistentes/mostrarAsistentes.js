import { ProximosEventos } from '../../pages/ProximosEventos/ProximosEventos'
import './mostrarAsistentes.css'

export const mostrarAsistentes = async (id, titulo, asistentes) => {

  const main = document.querySelector('main')
  main.innerHTML = ''
  const sectionMostrarAsistente = document.createElement('section')
  sectionMostrarAsistente.className = 'sectionNuevoAsistente'
  main.append(sectionMostrarAsistente)
  const h2 = document.createElement('h2')
  h2.innerText = titulo
  h2.className = 'tituloNuevoAsistente'
  sectionMostrarAsistente.append(h2)

  const articleAsistentes = document.createElement('article')
  sectionMostrarAsistente.append(articleAsistentes)
articleAsistentes.className = 'articleAsistentes'


for (const element of asistentes) {
  const pNombre = document.createElement('p')
  pNombre.innerText = `🛩️ Nombre: ${element.nombre} 
   Email: ${element.email} `
  articleAsistentes.append(pNombre)
  pNombre.className = 'pNombre'
}



  const buttonReturnEventos = document.createElement('button')
  buttonReturnEventos.className = 'buttonAsistente'
  buttonReturnEventos.innerText = 'Volver'
  sectionMostrarAsistente.append(buttonReturnEventos)
  buttonReturnEventos.addEventListener('click', ProximosEventos)
}