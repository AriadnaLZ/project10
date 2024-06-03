const Asistente = require('../models/asistente')
const Evento = require('../models/evento')


const getAsistentes = async (req, res, next) => {
  try {
    const asistentes = await Asistente.find().populate('eventos')
    return res.status(200).json(asistentes)
  } catch (error) {
    return res.status(400).json('Algo ha fallado mostrando los asistentes')
  }
}

const getAsistenteById = async (req, res, next) => {
  try {
    const {id} = req.params
    const asistente = await Asistente.findById(id).populate('eventos')
    return res.status(200).json(asistente)
  } catch (error) {
    return res.status(400).json('Algo ha fallado mostrando al asistente')
  }
}

const getEventosOfAsistente = async(req, res, next) => {
  try {
    const {id} = req.params
    const asistente = await Asistente.findById(id).populate('eventos')
    const eventos = []
    for (const element of asistente.eventos) {
     eventos.push(`-> ${element.titulo} - ${element.fecha} `)
    }
    return res.status(200).json(eventos)
  } catch (error) {
    return res.status(400).json('Algo ha fallado mostrando los eventos')
  }
}

const postAsistente = async (req, res, next) => {
  try {
    const newAsistente = new Asistente(req.body)
    const asistente = newAsistente.save()
    return res.status(201).json(asistente)
  } catch (error) {
    return res.status(400).json('Algo ha fallado al registrarte en los asistentes')
  }
}

const updateAsistente = async (req, res, next) => {
  try {
    const {id} = req.params
    const oldAsistente = await Asistente.findById(id)
    const newAsistente = new Asistente(req.body)
    newAsistente._id = id
    newAsistente.eventos = [...oldAsistente.eventos, ...newAsistente.eventos]
    const asistenteUpdated = await Asistente.findByIdAndUpdate(id, newAsistente, {new: true})
    return res.status(200).json(asistenteUpdated)
  } catch (error) {
    return res.status(400).json('Algo ha fallado al realizar los cambios')
  }
}

const deleteAsistente = async (req, res, next) => {
  try {
    const {id} = req.params
    const asistenteDeleted = await Asistente.findByIdAndDelete(id)
    return res.status(200).json({
      mensaje: 'Se ha eleminado a este asistente',
      asistenteEliminado: asistenteDeleted
    })
  } catch (error) {
    return res.status(400).json('Algo ha fallado al borrar al asistente')
  }
}


module.exports = {
  getAsistentes,
  getAsistenteById,
  getEventosOfAsistente,
  postAsistente,
  updateAsistente,
  deleteAsistente,

}