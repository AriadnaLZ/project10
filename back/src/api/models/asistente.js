const mongoose = require('mongoose')

const asistenteSchema = new mongoose.Schema(
  {
    nombre: {type: String, required: true},
    email: {type: String, required: true},
    telefono: {type: String, required: true},
    eventos: [
      {type: mongoose.Types.ObjectId, required: false, ref: 'eventos'}
    ],
  },
  {
    timestamps: true,
    collection: 'asistentes'
  }
)

const Asistente = mongoose.model('asistentes', asistenteSchema, 'asistentes')
module.exports = Asistente