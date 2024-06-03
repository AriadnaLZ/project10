const mongoose = require('mongoose')

const eventoSchema = new mongoose.Schema(
  {
    imagen: {type: String, required: false},
    titulo: {type: String, required: true},
    fecha: {type: String, required: true},
    precio: {type: Number, required: true},
    descripcion: {type: String, required: true},
    asistentes: [{type: mongoose.Types.ObjectId, required: false, ref: 'asistentes'}]
  },
  {
    timestamps: true,
    collection: 'eventos'
  }
)

const Evento = mongoose.model('eventos', eventoSchema, 'eventos')
module.exports = Evento