const Evento = require("../../api/models/evento");
const eventos = require("../../data/eventos");
const mongoose = require('mongoose')
require('dotenv').config()

mongoose
.connect(process.env.DB_URL)
.then(
  async () => {
    const allEvents = await Evento.find()
    if (allEvents.length) {
      await Evento.collection.drop()
    }
  }
)
.catch((err) => console.log('Error deleting data'))
.then(async () => {
  await Evento.insertMany(eventos)
})
.catch((err) => console.log('Error creating data'))
.finally(() => mongoose.disconnect())