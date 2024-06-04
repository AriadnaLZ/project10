const mongoose = require('mongoose')

const eventoPasado = new mongoose.Schema(
  {
    imagen: {type: String, required: false},
    titulo: {
     type: String, required: true
    },
    fecha: {type: String, required: true},
    asistentes: [{type: mongoose.Types.ObjectId, required: false, ref: 'asistentes'}],
    fotosDelEvento: [{type: String, required: false}]
  },
  {
    timestamps: true,
    collection: 'eventosPasados'
  }
)

const EventoPasado = mongoose.model('eventosPasados', eventoPasado, 'eventosPasados')
module.exports = EventoPasado