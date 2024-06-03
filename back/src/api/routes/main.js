const asistentesRouter = require("./asistente");
const eventosRouter = require("./evento");
const eventosPasadosRouter = require("./eventoPasado");
const usersRouter = require("./user");


const mainRouter = require('express').Router()
mainRouter.use('/users', usersRouter)
mainRouter.use('/eventos', eventosRouter)
mainRouter.use('/asistentes', asistentesRouter)
mainRouter.use('/eventosPasados', eventosPasadosRouter)

module.exports = mainRouter