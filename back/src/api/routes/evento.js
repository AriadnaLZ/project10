const { isAuth } = require("../../middlewares/auth");
const { getEventoById, getEventos, postEvento, updateEvento, deleteEvento, putAsistentesOfEvento, getAsistentesAtEvento } = require("../controllers/evento");

const eventosRouter = require('express').Router()

eventosRouter.get('/', getEventos)
eventosRouter.get('/:id', getEventoById)
eventosRouter.get('/asistentes/:id', isAuth, getAsistentesAtEvento)
eventosRouter.post('/', isAuth,postEvento)
eventosRouter.put('/:id', isAuth,updateEvento)
eventosRouter.put('/:idEvento/:idAsistente', isAuth,putAsistentesOfEvento)
eventosRouter.delete('/:id', isAuth ,deleteEvento)


module.exports = eventosRouter