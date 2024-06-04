const Asistente = require('../models/asistente')
const Evento = require('../models/evento')

const getEventos = async (req, res ,next) => {
try {
    const eventos = await Evento.find().populate('asistentes')
    return res.status(200).json(eventos)
} catch (error) {
  return res.status(400).json('Algo ha fallado al mostrar todos los eventos')
}
}

const getEventoById = async (req, res, next) => {
  try {
    const {id} = req.params
    const evento = await Evento.findById(id).populate('asistentes')
    return res.status(200).json(evento)
  } catch (error) {
    return res.status(400).json('Algo ha fallado mostrando el evento')
  }
}

const getAsistentesAtEvento = async (req, res, next) => {
  try {
    const {id} = req.params
    const evento = await Evento.findById(id).populate('asistentes')
    const asistentes = []
    for (const element of evento.asistentes) {
     asistentes.push(`- ${element.nombre}`)
    }
    return res.status(200).json(asistentes)
  } catch (error) {
    return res.status(400).json('Algo ha fallado mostrando el evento')
  }
}

const putAsistentesOfEvento = async (req, res, next) => {
  try {
    const {idEvento} = req.params
    const evento = await Evento.findById(idEvento).populate('asistentes')
    const oldEvento = evento

    const {idAsistente} = req.params
    const asistente = await Asistente.findById(idAsistente).populate('eventos')
    const oldAsistente = asistente

    for (const person of evento.asistentes) {
      if (person._id == idAsistente) {
        return res.status(400).json('Ya estás inscrito en este evento')
      }
    }

      const newEvento = new Evento({asistentes: idAsistente})
      newEvento._id = idEvento
      newEvento.asistentes = [...oldEvento.asistentes, ...newEvento.asistentes]
      const eventoUpdated = await Evento.findByIdAndUpdate(idEvento, newEvento, {new: true}).populate('asistentes')
   
 
      const newAsistente = new Asistente({eventos: idEvento})
      newAsistente._id = idAsistente
      newAsistente.eventos = [...oldAsistente.eventos, ...newAsistente.eventos]
      const asistenteUpdated = await Asistente.findByIdAndUpdate(idAsistente, newAsistente, {new: true}).populate('eventos')
  

    return res.status(200).json('Todo ha salido correctamente')
  } catch (error) {
    return res.status(400).json('Algo ha fallado mostrando los asistentes al evento')
    
  }
}

const postEvento = async (req, res, next) => {
  try {
    const newEvento = new Evento(req.body)
    const evento = newEvento.save()
    return res.status(201).json(evento)
  } catch (error) {
    return res.status(400).json('Algo ha fallado publicando el evento')
  }
}

const updateEvento = async (req, res, next) => {
  try {
    const {id} = req.params
    const oldEvento = await Evento.findById(id)
    const newEvento = new Evento(req.body)
    newEvento._id = id
    newEvento.asistentes = [...oldEvento.asistentes ,...newEvento.asistentes]
    const eventoUpdated = await Evento.findByIdAndUpdate(id, newEvento, {new: true})
    return res.status(200).json(eventoUpdated)
  } catch (error) {
    return res.status(400).json('Algo ha fallado modificando el evento')
  }
}

const deleteEvento = async (req, res, next) => {
  try {
    const {id} = req.params
    const eventoDeleted = await Evento.findByIdAndDelete(id)
    return res.status(200).json(
      {
        mensaje: 'Ha sido eliminado el siguiente evento',
        eventoEliminado: eventoDeleted
      }
    )
  } catch (error) {
    return res.status(400).json('Algo ha fallado borrando el evento')
  }
}



module.exports = {
 getEventos,
 getEventoById,
 postEvento,
 updateEvento,
  deleteEvento,
  putAsistentesOfEvento,
  getAsistentesAtEvento
}