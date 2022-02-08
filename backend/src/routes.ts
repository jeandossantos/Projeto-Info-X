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
import { CreateSituacionController } from "./controllers/situation/CreateSituacionController";
import { DeleteSituationController } from "./controllers/situation/DeleteSituacionService";
import { FindSituationsController } from "./controllers/situation/FindSituationsController";
import { UpdateSituationController } from "./controllers/situation/UpdateSituationController";

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
routes.post('/situation', new CreateSituacionController().handle);
routes.get('/situation', new FindSituationsController().handle);
routes.put('/situation/:id', new UpdateSituationController().handle);
routes.delete('/situation/:id', new DeleteSituationController().handle);

// orders routes
routes.post('/orders', new CreateOrderController().handle);
routes.get('/orders', new FindOrdersController().handle);
routes.put('/orders/:id', new UpdateOrderController().handle);

export { routes }