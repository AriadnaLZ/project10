import { Header } from './src/components/header/header'
import './style.css'

const app = document.querySelector('#app')
const header = document.createElement('header')
const main = document.createElement('main')
const footer = document.createElement('footer')


app.append(header)
app.append(main)
app.append(footer)

Header()


