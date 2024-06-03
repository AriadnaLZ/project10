import { EventosPasados } from '../../pages/EventosPasados/EventosPasados'
import { Home } from '../../pages/Home/Home'
import { LoginRegister } from '../../pages/LoginRegister/LoginRegister'
import { ProximosEventos } from '../../pages/ProximosEventos/ProximosEventos'
import './header.css'



const routes = [
  {
    texto: 'Home',
    funcion: Home
  },
  {
    texto: 'Login/Registro',
    funcion: LoginRegister
  },
{  texto: 'Próximos Viajes',
  funcion: ProximosEventos},
  {
    texto: 'Anteriores Viajes',
    funcion: EventosPasados
  }
]

export const Header = () => {
  const header = document.querySelector('header')
  header.innerHTML = ''
  const h1 = document.createElement('h1')
  h1.textContent = 'Viajando por el mundo 🌍✈️'

  const div = document.createElement('div')
  div.className = 'divHeader'

  const nav = document.createElement('nav')
  for (const route of routes) {

      const a = document.createElement('a')
      a.href = '#'

      if (route.texto === 'Login' && localStorage.getItem('token')) {
        a.textContent = 'Logout'
        a.addEventListener('click', () => {
          localStorage.removeItem('token')
          Header()
        })
  
      } else {
        
      a.textContent = route.texto
      a.addEventListener('click',route.funcion)
      }

 
      nav.append(a)
    
  
  }
  header.append(h1)
  header.append(div)
  div.append(nav)


  Home()

}