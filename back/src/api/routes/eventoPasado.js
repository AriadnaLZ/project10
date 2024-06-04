const { isAuth } = require("../../middlewares/auth");
const { getEventoPasado, getEventoPasadoById, getAsistenteOfEventoPasado, postEventoPasado, deleteEventoPasado, updateEventoPasado, getImagesOfEventoPasado } = require("../controllers/eventoPasado");

const eventosPasadosRouter = require('express').Router()

eventosPasadosRouter.get('/', getEventoPasado)
eventosPasadosRouter.get('/:id', getEventoPasadoById)
eventosPasadosRouter.get('/asistentes/:id', getAsistenteOfEventoPasado)
eventosPasadosRouter.get('/imagenes/:id', getImagesOfEventoPasado)
eventosPasadosRouter.post('/',  isAuth,postEventoPasado)
eventosPasadosRouter.put('/:id',isAuth ,updateEventoPasado)
eventosPasadosRouter.delete('/:id', isAuth,deleteEventoPasado)

module.exports = eventosPasadosRouter

