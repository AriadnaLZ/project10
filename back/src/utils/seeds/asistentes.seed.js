const Asistente = require("../../api/models/asistente");
const asistentes = require("../../data/asistentes");
const mongoose = require('mongoose')
require('dotenv').config()

mongoose
.connect(process.env.DB_URL)
.then(
  async () => {
    const allAsistents = await Asistente.find()
    if (allAsistents.length) {
      await Asistente.collection.drop()
    }
  }
)
.catch((err) => console.log('Error deleting data'))
.then(async () => {
  await Asistente.insertMany(asistentes)
})
.catch((err) => console.log(err))
.finally(() => mongoose.disconnect())