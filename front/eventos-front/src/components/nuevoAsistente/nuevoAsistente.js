
import { ProximosEventos } from '../../pages/ProximosEventos/ProximosEventos'
import './nuevoAsistente.css'


export const NuevoAsistente = async (id, titulo, asistentes) => {
 const main = document.querySelector('main')
main.innerHTML = ''
const sectionNuevoAsistente = document.createElement('section')
sectionNuevoAsistente.className = 'sectionNuevoAsistente'
main.append(sectionNuevoAsistente)
const h2 = document.createElement('h2')
h2.innerText = titulo
h2.className = 'tituloNuevoAsistente'
sectionNuevoAsistente.append(h2)

const articleAsistentes = document.createElement('article')
sectionNuevoAsistente.append(articleAsistentes)

let emailAsistente = localStorage.getItem('email')
let idAsistente 


const resAsistentes = await fetch('http://localhost:8000/api/v1/asistentes')
const listadoAsistentes = await resAsistentes.json()
for (const element of listadoAsistentes) {
const email = `"${element.email}"`
if (email == emailAsistente) {
  idAsistente = element._id
}
}





const resEvento = await fetch(`http://localhost:8000/api/v1/eventos/${id}/`)
const respuestaFinalEvento = await resEvento.json()

const asistentesEvento = respuestaFinalEvento.asistentes
let listadoIdAsistentes = []
for (const element of asistentesEvento) {
  listadoIdAsistentes.push(element._id)
}

console.log(idAsistente, listadoIdAsistentes)

if (listadoIdAsistentes.includes(idAsistente)) {
  const pError = document.createElement('p')
  pError.innerText = 'Ya estás inscrito en este evento'
  pError.className = 'pError'
  sectionNuevoAsistente.append(pError)

  const buttonReturnEventos = document.createElement('button')
  buttonReturnEventos.className = 'buttonAsistente'
  buttonReturnEventos.innerText = 'Volver'
  sectionNuevoAsistente.append(buttonReturnEventos)
  buttonReturnEventos.addEventListener('click', ProximosEventos)

} else {
  const opciones = {
    method: "PUT",
    headers: {
      "Content-Type": "aplication/json",
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  }
  
  const res= await fetch(`http://localhost:8000/api/v1/eventos/${id}/${idAsistente}`, opciones)

  const pAceptado = document.createElement('p')
  pAceptado.className = 'pAceptado'
  pAceptado.innerText = 'Te has registrado correctamente'
  sectionNuevoAsistente.append(pAceptado)
  
  const buttonReturnEventos = document.createElement('button')
  buttonReturnEventos.className = 'buttonAsistente'
  buttonReturnEventos.innerText = 'Volver'
  sectionNuevoAsistente.append(buttonReturnEventos)
  buttonReturnEventos.addEventListener('click', ProximosEventos)
}

}


