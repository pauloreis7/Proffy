import express from 'express'

import ClassesController from './controllers/classesController';
import ConnectionsController from './controllers/connectionsController';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

//Classes
routes.get("/classes", classesController.index);

routes.post("/classes", classesController.create);

//Connections
routes.get("/connections", connectionsController.index)

routes.post("/connections", connectionsController.create)

export default routes;