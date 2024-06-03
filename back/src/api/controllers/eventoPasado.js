const EventoPasado = require("../models/eventoPasado");

const getEventoPasado= async (req, res, next) => {
  try {
    const events = await EventoPasado.find().populate('asistentes')
    return res.status(200).json(events)
  } catch (error) {
    return res.status(400).json('Algo ha fallado mostrando los usuarios')
  }
}

const getEventoPasadoById = async (req, res, next) => {
  try {
    const {id} = req.params
    const eventoPasado = await EventoPasado.findById(id).populate('asistentes')
    return res.status(200).json(eventoPasado)
  } catch (error) {
    return res.status(400).json('Algo ha fallado mostrando el evento')
  }
}

const getAsistenteOfEventoPasado = async (req, res, next) => {
  try {
    const {id} = req.params
    const eventoPasado = await EventoPasado.findById(id).populate('asistentes')
    return res.status(200).json(eventoPasado.asistentes)
  } catch (error) {
    return res.status(400).json('Algo ha fallado mostrando los asistentes al evento')
  }
}

const getImagesOfEventoPasado = async(req, res, next) => {
  try {
    const {id} = req.params
    const eventoPasado = await EventoPasado.findById(id).populate('asistentes')
    return res.status(200).json(eventoPasado.fotosDelEvento)
  } catch (error) {
    return res.status(400).json('Algo ha fallado mostrando las imágenes del evento')
  }
}

const postEventoPasado = async (req, res, next) => {
  try {
    const newEventoPasado = new EventoPasado(req.body)
    const evento = newEventoPasado.save()
    return res.status(201).json(evento)
  } catch (error) {
    return res.status(400).json('Algo ha fallado publicando el evento')
  }
}

const updateEventoPasado = async (req, res, next) => {
  try {
    const {id} = req.params
    const oldEventoPasado = await EventoPasado.findById(id)
    const newEventoPasado = new EventoPasado(req.body)
    newEventoPasado._id = id
    newEventoPasado.asistentes = [...oldEventoPasado.asistentes, ...newEventoPasado.asistentes]
    const eventoUpdated = await EventoPasado .findByIdAndUpdate(id, newEventoPasado, {new: true})
    return res.status(200).json(eventoUpdated)
  } catch (error) {
    return res.status(400).json('Algo ha fallado modificando el evento')
  }
}

const deleteEventoPasado = async (req, res, next) => {
  try {
    const {id} = req.params
    const eventoPasadoDeleted = await EventoPasado.findByIdAndDelete(id)
    return res.status(200).json(
    {
      mensaje: 'Se ha eliminado el siguiente evento',
      eventoPasadoEliminado: eventoPasadoDeleted
    }
    )
  } catch (error) {
    return res.status(400).json('Algo ha fallado borrando el evento')
  }
}


module.exports = {
  getEventoPasado,
  getEventoPasadoById,
  postEventoPasado,
 updateEventoPasado,
   deleteEventoPasado,
   getAsistenteOfEventoPasado,
   getImagesOfEventoPasado
}