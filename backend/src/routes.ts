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
import { FindOrdersController } from "./controllers/order/FindOrdersController";
import { UpdateOrderController } from "./controllers/order/UpdateOrderController";
import { CreateSituacionController } from "./controllers/situacion/CreateSituacionController";
import { DeleteSituacionController } from "./controllers/situacion/DeleteSituacionService";
import { FindSituacionController } from "./controllers/situacion/FindSituationsController";
import { UpdateSituacionController } from "./controllers/situacion/UpdateSituacionController";

const routes = Router();

//customers routes
routes.post('/clients', new CreateClientController().handle);
routes.put('/clients/:id', new UpdateClientController().handle);
routes.get('/clients', new FindClientsController().handle);
routes.delete('/clients/:id', new DeleteClientController().handle);

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
routes.get('/orders', new FindOrdersController().handle);
routes.put('/orders/:id', new UpdateOrderController().handle);

export { routes }