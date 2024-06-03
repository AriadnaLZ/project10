const EventoPasado = require("../../api/models/eventoPasado");
const eventosPasados = require("../../data/eventosPasados");
const mongoose = require('mongoose')
require('dotenv').config()


mongoose
.connect(process.env.DB_URL)
.then(
  async () => {
    const allEventsPast = await EventoPasado.find()
    if (allEventsPast.length) {
      await EventoPasado.collection.drop()
    }
  }
)
.catch((err) => console.log('Error deleting data'))
.then(async () => {
  await EventoPasado.insertMany(eventosPasados)
})
.catch((err) => console.log('Error creating data'))
.finally(() => mongoose.disconnect())