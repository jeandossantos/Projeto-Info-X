import { Router } from "express";

import { CreateClientController } from "./controllers/client/CreateClientController";
import { DeleteClientController } from "./controllers/client/DeleteClientController";
import { FindClientsController } from "./controllers/client/FindClientsController";
import { UpdateClientController } from "./controllers/client/UpdateClientController";
import { CreateEmployeeController } from "./controllers/employee/CreateEmployeeController";
import { DeleteEmployeeController } from "./controllers/employee/DeleteEmployeeService";
import { FindEmployeesController } from "./controllers/employee/FindEmployeesController";
import { UpdateEmployeeController } from "./controllers/employee/UpdateEmployeeController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { CreateSituacionController } from "./controllers/situacion/CreateSituacionController";
import { DeleteSituacionController } from "./controllers/situacion/DeleteSituacionService";
import { FindSituacionController } from "./controllers/situacion/FindSituationsController";
import { UpdateSituacionController } from "./controllers/situacion/UpdateSituacionController";

const routes = Router();

//customers routes
routes.post('/customers', new CreateClientController().handle);
routes.put('/customers/:id', new UpdateClientController().handle);
routes.get('/customers', new FindClientsController().handle);
routes.delete('/customers/:id', new DeleteClientController().handle);

//employees routes
routes.post('/employees', new CreateEmployeeController().handle);
routes.put('/employees/:id', new UpdateEmployeeController().handle);
routes.get('/employees', new FindEmployeesController().handle);
routes.delete('/employees/:id', new DeleteEmployeeController().handle);

//situations routes
routes.post('/situacions', new CreateSituacionController().handle);
routes.get('/situacions', new FindSituacionController().handle);
routes.put('/situacions/:id', new UpdateSituacionController().handle);
routes.delete('/situacions/:id', new DeleteSituacionController().handle);

// orders routes
routes.post('/orders', new CreateOrderController().handle);

export { routes }