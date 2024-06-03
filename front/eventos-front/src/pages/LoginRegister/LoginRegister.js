import { Home } from '../Home/Home'
import './LoginRegister.css'

export let username
export let mail

export const LoginRegister = () => {
  const main = document.querySelector('main')
  main.innerHTML = ' '

  const sectionButtons = document.createElement('section')
  sectionButtons.className = 'sectionButtonsLogin'
  main.append(sectionButtons)
    const buttonLogin = document.createElement('button')
    buttonLogin.className = 'buttonLogin'
    buttonLogin.innerText = 'Login'
    sectionButtons.append(buttonLogin)
    buttonLogin.addEventListener('click', () => {
      main.innerHTML = ''
      login(main)
    })
    
    const buttonRegister = document.createElement('button')
    buttonRegister.innerText = 'Registro'
    buttonRegister.className = 'buttonLogin'
    sectionButtons.append(buttonRegister)
    buttonRegister.addEventListener('click', () => {
      main.innerHTML = ''
      register(main)
    })

    
    

    
  }



  const login = (site) => {
    const main = document.querySelector('main')
    main.innerHTML = ''
    const form = document.createElement('form')
    form.className = 'formLogin'

    const inputUN = document.createElement('input')
    inputUN.placeholder = 'Usuario'
    const inputPass = document.createElement('input')
    inputPass.placeholder = 'Contraseña'
    const button = document.createElement('button')
    button.className = 'buttonLogin'
    button.textContent = 'Login'
    inputPass.type = 'password'

    site.append(form)
    form.append(inputUN)
    form.append(inputPass)

    form.append(button)

    form.addEventListener('submit', () => {
      username = inputUN.value
      submitLogin(inputUN.value, inputPass.value, form)})
      return username, mail
  }

  const submitLogin = async (userName, password, form) => {

    const objetoFinal = JSON.stringify({
      userName,
      password
    })
    console.log(userName, password);
    const res = await fetch('http://localhost:8000/api/v1/users/login', {
      method: 'POST',
      body: objetoFinal,
      headers: {
        "Content-Type": "application/json"
      }
    })

    if (res.status === 400) {
      const pError = document.createElement('p')
      pError.innerText = 'Usuario o contraseña incorrectos'
      pError.className = 'pError'
      form.append(pError)
      return
    }

    const pError = document.querySelector('.error')
    if (pError) {
      pError.remove()
    }

    const respuestaFinal = await res.json()
    console.log(respuestaFinal)
    

    localStorage.setItem('token', respuestaFinal.token)
    localStorage.setItem('user', JSON.stringify(respuestaFinal.user))
    localStorage.setItem('email', JSON.stringify(respuestaFinal.user.email))
    Home()

  }


  const register = async (site) => {
    const form = document.createElement('form')
    form.className = 'formLogin'

    const inputNombre = document.createElement('input')
    inputNombre.placeholder = 'Nombre completo'
    const inputUN = document.createElement('input')
    inputUN.placeholder = 'Usuario'
    const inputPass = document.createElement('input')
    inputPass.placeholder = 'Contraseña'
    const inputEmail = document.createElement('input')
    inputEmail.placeholder = 'Email'
    inputEmail.type = 'email'
    const inputTelefono = document.createElement('input')
    inputTelefono.placeholder = 'Teléfono'
    const button = document.createElement('button')
    button.className = 'buttonLogin'
    button.textContent = 'Registrarse'
    inputPass.type = 'password'

    site.append(form)
    form.append(inputNombre)
    form.append(inputUN)
    form.append(inputPass)
    form.append(inputEmail)
    form.append(inputTelefono)
    form.append(button)


    form.addEventListener('submit', async () => {
      username = inputUN.value
     const email = inputEmail.value
     const nombre = inputNombre.value
     const telefono = inputTelefono.value
      const res = await fetch( 'http://localhost:8000/api/v1/users')
      const users = await res.json()
      const allUsers = []
      const allEmails = []
      for (const element of users) {
        allUsers.push(element.userName)
        allEmails.push(element.email)
      }
      if (allUsers.includes(username)) {
        const pError = document.createElement('p')
        pError.className = 'pError'
        pError.innerText = 'Este usuario ya existe'
        form.append(pError)
      } else if (allEmails.includes(email)) {
        const pError = document.createElement('p')
        pError.className = 'pError'
        pError.innerText = 'Este email ya existe'
        form.append(pError)
      } else {
        submitRegister(inputUN.value, inputPass.value, inputEmail.value, inputNombre.value,  inputTelefono.value ,form)
        const main = document.querySelector('main')
        main.innerHTML = ' ' 
        const divRegistro = document.createElement('div')
        divRegistro.className = 'divRegistro'
        main.append(divRegistro)
        const h2 = document.createElement('h2')
        h2.innerText = 'Te has registrado correctamente'
        divRegistro.append(h2)
        const buttonLogin = document.createElement('button')
        buttonLogin.innerText = 'Login'
        buttonLogin.className = 'buttonLogin'
        divRegistro.append(buttonLogin)
        buttonLogin.addEventListener('click', () => {
          login(main)
        })
      }

    })
      
  }

  const submitRegister = async (userName, password, email, nombre, telefono,  form) => {

    const objetoFinalRegistro = JSON.stringify({
      userName,
      password,
      email
    })

    const resRegistro = await fetch('http://localhost:8000/api/v1/users/register', {
      method: 'POST',
      body: objetoFinalRegistro,
      headers: {
        "Content-Type": "application/json"
      }
    })

    
    const objetoFinalAsistentes = JSON.stringify({
      nombre,
      email,
      telefono
    })

    const resAsistente = await fetch('http://localhost:8000/api/v1/asistentes/', {
      method: 'POST',
      body: objetoFinalAsistentes,
      headers: {
        "Content-Type": "application/json"
      }
    })



    const respuestaFinalRegistro = await resRegistro.json()

    const respuestaFinalAsistentes = await resAsistente.json()

    console.log(respuestaFinalAsistentes, respuestaFinalRegistro)
    // LoginRegister()
  }

