import './Home.css'

const imagenes = [
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716892443/Proyecto%2010/paris.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893665/Proyecto%2010/tokio.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893966/Proyecto%2010/newyork.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894061/Proyecto%2010/sidney.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894092/Proyecto%2010/elcairo.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894159/Proyecto%2010/roma.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894193/Proyecto%2010/londres.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894234/Proyecto%2010/barcelona.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894266/Proyecto%2010/bali.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894308/Proyecto%2010/cancun.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894356/Proyecto%2010/ciudaddelcabo.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894389/Proyecto%2010/honolulu.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894468/Proyecto%2010/estambul.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894494/Proyecto%2010/atenas.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894557/Proyecto%2010/venecia.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893116/Proyecto%2010/berlin.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893163/Proyecto%2010/riodejaneiro.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893287/Proyecto%2010/bangkok.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893371/Proyecto%2010/moscu.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893467/Proyecto%2010/sanfrancisco.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893503/Proyecto%2010/toronto.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893541/Proyecto%2010/dubai.jpg",
  "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893595/Proyecto%2010/buenosaires.jpg"
];


export const Home = () => {
  const main = document.querySelector('main')
  main.innerHTML = ''
  const sectionImages = document.createElement('section')
  sectionImages.className = 'sectionImages'
  main.append(sectionImages)
  for (const image of imagenes) {
    const articleImage = document.createElement('article')
    articleImage.className = 'articleImage'
    sectionImages.append(articleImage)
    const imgHome = document.createElement('img')
    imgHome.className = 'imgHome'
    imgHome.src = image
    articleImage.append(imgHome)
  }
  
  }