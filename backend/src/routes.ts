import { Router } from "express";

import { CreateCustomerController } from "./controllers/customer/CreateCustomerController";
import { DeleteCustomerController } from "./controllers/customer/DeleteCustomerController";
import { FindCustomerController } from "./controllers/customer/FindCustomerController";
import { UpdateCustomerController } from "./controllers/customer/UpdateCustomerController";
import { CreateEmployeeController } from "./controllers/employee/CreateEmployeeController";
import { DeleteEmployeeController } from "./controllers/employee/DeleteEmployeeService";
import { FindEmployeesController } from "./controllers/employee/FindEmployeesController";
import { UpdateEmployeeController } from "./controllers/employee/UpdateEmployeeController";
import { CreateSituacionController } from "./controllers/situacion/CreateSituacionController";
import { DeleteSituacionController } from "./controllers/situacion/DeleteSituacionService";
import { FindSituacionController } from "./controllers/situacion/FindSituationsController";
import { UpdateSituacionController } from "./controllers/situacion/UpdateSituacionController";

const routes = Router();

//customers routes
routes.post('/customers', new CreateCustomerController().handle);
routes.put('/customers/:id', new UpdateCustomerController().handle);
routes.get('/customers', new FindCustomerController().handle);
routes.delete('/customers/:id', new DeleteCustomerController().handle);

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

export { routes }