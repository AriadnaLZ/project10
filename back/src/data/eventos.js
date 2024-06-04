const eventos = [
  {
    "imagen": "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716892443/Proyecto%2010/paris.jpg",
    "titulo": "Viaje a París",
    "fecha": "2024-07-15",
    "precio": "1200.00",
    "descripcion": "Duración: 5 días. Día 1: Llegada y paseo por Montmartre. Día 2: Visita a la Torre Eiffel y crucero por el Sena. Día 3: Museo del Louvre y Jardines de Luxemburgo. Día 4: Catedral de Notre Dame y Le Marais. Día 5: Tiempo libre y compras en los Campos Elíseos."
  },
  {
    "imagen": "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893665/Proyecto%2010/tokio.jpg",
    "titulo": "Descubre Tokio",
    "fecha": "2024-09-10",
    "precio": "1500.00",
    "descripcion": "Duración: 6 días. Día 1: Llegada y visita a Asakusa y el Templo Senso-ji. Día 2: Paseo por el cruce de Shibuya y Harajuku. Día 3: Mercado de Tsukiji y Jardines Hamarikyu. Día 4: Akihabara y Palacio Imperial. Día 5: Parque Ueno y Museo Nacional. Día 6: Tiempo libre y compras en Ginza."
  },
  {
    "imagen": "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716893966/Proyecto%2010/newyork.jpg",
    "titulo": "Aventura en Nueva York",
    "fecha": "2024-11-05",
    "precio": "1100.00",
    "descripcion": "Duración: 5 días. Día 1: Llegada y paseo por Times Square. Día 2: Estatua de la Libertad y Ellis Island. Día 3: Central Park y Museo Metropolitano de Arte. Día 4: Empire State Building y Quinta Avenida. Día 5: Espectáculo de Broadway y visita a la Zona Cero."
  },
  {
    "imagen": "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894061/Proyecto%2010/sidney.jpg",
    "titulo": "Explora Sídney",
    "fecha": "2024-08-20",
    "precio": "1400.00",
    "descripcion": "Duración: 6 días. Día 1: Llegada y paseo por Darling Harbour. Día 2: Ópera de Sídney y Puente de la Bahía. Día 3: Playa Bondi y mercado de Paddington. Día 4: Zoológico de Taronga y Manly Beach. Día 5: Excursión a las Montañas Azules. Día 6: Tiempo libre y compras en Pitt Street."
  },
  {
    "imagen": "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894092/Proyecto%2010/elcairo.jpg",
    "titulo": "Maravillas de El Cairo",
    "fecha": "2024-10-12",
    "precio": "1300.00",
    "descripcion": "Duración: 5 días. Día 1: Llegada y visita al bazar de Khan el-Khalili. Día 2: Pirámides de Giza y Esfinge. Día 3: Museo Egipcio y Barrio Copto. Día 4: Ciudadela de Saladino y Mezquita de Muhammad Alí. Día 5: Crucero por el Nilo y despedida."
  },
  {
    "imagen": "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894159/Proyecto%2010/roma.jpg",
    "titulo": "Roma Histórica",
    "fecha": "2024-06-25",
    "precio": "1150.00",
    "descripcion": "Duración: 5 días. Día 1: Llegada y paseo por el Trastevere. Día 2: Coliseo y Foro Romano. Día 3: Ciudad del Vaticano y Museos Vaticanos. Día 4: Fontana di Trevi y Plaza de España. Día 5: Panteón y Plaza Navona."
  },
  {
    "imagen": "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894193/Proyecto%2010/londres.jpg",
    "titulo": "Londres Clásico",
    "fecha": "2024-05-18",
    "precio": "1250.00",
    "descripcion": "Duración: 5 días. Día 1: Llegada y paseo por el Támesis. Día 2: Big Ben y Palacio de Buckingham. Día 3: Torre de Londres y Puente de la Torre. Día 4: Museo Británico y Covent Garden. Día 5: Camden Market y espectáculo en el West End."
  },
  {
    "imagen": "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894234/Proyecto%2010/barcelona.jpg",
    "titulo": "Barcelona y Gaudí",
    "fecha": "2024-04-14",
    "precio": "1350.00",
    "descripcion": "Duración: 5 días. Día 1: Llegada y paseo por Las Ramblas. Día 2: Sagrada Familia y Hospital de Sant Pau. Día 3: Parque Güell y Casa Batlló. Día 4: Barrio Gótico y Catedral de Barcelona. Día 5: Montjuïc y Plaza de España."
  },
  {
    "imagen": "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894266/Proyecto%2010/bali.jpg",
    "titulo": "Escapada a Bali",
    "fecha": "2024-07-22",
    "precio": "1600.00",
    "descripcion": "Duración: 6 días. Día 1: Llegada y relax en la playa de Kuta. Día 2: Templo de Tanah Lot y terrazas de arroz en Jatiluwih. Día 3: Ubud y Monkey Forest. Día 4: Templo Besakih y volcán Batur. Día 5: Playas de Seminyak y clase de cocina balinesa. Día 6: Tiempo libre y compras en Ubud."
  },
  {
    "imagen": "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894308/Proyecto%2010/cancun.jpg",
    "titulo": "Relax en Cancún",
    "fecha": "2024-03-05",
    "precio": "1100.00",
    "descripcion": "Duración: 5 días. Día 1: Llegada y relax en la playa. Día 2: Snorkel en el Parque Nacional Arrecife de Puerto Morelos. Día 3: Excursión a Tulum y Playa Paraíso. Día 4: Visita a Chichen Itzá y cenote Ik Kil. Día 5: Tiempo libre y compras en la Zona Hotelera."
  },
  {
    "imagen": "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894356/Proyecto%2010/ciudaddelcabo.jpg",
    "titulo": "Aventura en Ciudad del Cabo",
    "fecha": "2024-09-30",
    "precio": "1450.00",
    "descripcion": "Duración: 6 días. Día 1: Llegada y visita al V&A Waterfront. Día 2: Escalada a la Montaña de la Mesa. Día 3: Cabo de Buena Esperanza y Boulders Beach. Día 4: Viñedos en Stellenbosch. Día 5: Bo-Kaap y Jardín Botánico Kirstenbosch. Día 6: Tiempo libre y compras en Long Street."
  },
  {
    "imagen": "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894389/Proyecto%2010/honolulu.jpg",
    "titulo": "Paraíso en Honolulu",
    "fecha": "2024-12-15",
    "precio": "1700.00",
    "descripcion": "Duración: 6 días. Día 1: Llegada y relax en Waikiki Beach. Día 2: Cráter de Diamond Head y visita a Pearl Harbor. Día 3: Excursión a la Costa Norte y plantaciones de piña. Día 4: Paseo por el centro de Honolulu y el Palacio Iolani. Día 5: Snorkel en Hanauma Bay. Día 6: Luau tradicional y despedida."
  },
  {
    "imagen": "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894468/Proyecto%2010/estambul.jpg",
    "titulo": "Misterios de Estambul",
    "fecha": "2024-10-25",
    "precio": "1250.00",
    "descripcion": "Duración: 5 días. Día 1: Llegada y paseo por Sultanahmet. Día 2: Hagia Sophia y Mezquita Azul. Día 3: Palacio Topkapi y Cisterna Basílica. Día 4: Gran Bazar y Bazar de las Especias. Día 5: Crucero por el Bósforo y despedida."
  },
  {
    "imagen": "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894494/Proyecto%2010/atenas.jpg",
    "titulo": "Atenas y la Antigüedad",
    "fecha": "2024-08-12",
    "precio": "1150.00",
    "descripcion": "Duración: 5 días. Día 1: Llegada y paseo por Plaka. Día 2: Acrópolis y Museo de la Acrópolis. Día 3: Ágora Antigua y Templo de Hefesto. Día 4: Museo Arqueológico Nacional y Monte Licabeto. Día 5: Tiempo libre y compras en Monastiraki."
  },
  {
    "imagen": "https://res.cloudinary.com/dgyeaj8pu/image/upload/v1716894557/Proyecto%2010/venecia.jpg",
    "titulo": "Encantos de Venecia",
    "fecha": "2024-06-02",
    "precio": "1200.00",
    "descripcion": "Duración: 5 días. Día 1: Llegada y paseo en góndola por los canales. Día 2: Plaza de San Marcos y Basílica de San Marcos. Día 3: Palacio Ducal y Puente de los Suspiros. Día 4: Islas de Murano y Burano. Día 5: Tiempo libre y compras en Rialto."
  }
];

module.exports = eventos