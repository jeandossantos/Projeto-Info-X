import { Router } from "express";
import { CreateCustomerController } from "./controllers/customer/CreateCustomerController";
import { DeleteCustomerController } from "./controllers/customer/DeleteCustomerController";
import { FindCustomerController } from "./controllers/customer/FindCustomerController";
import { UpdateCustomerController } from "./controllers/customer/UpdateCustomerController";
import { CreateEmployeeController } from "./controllers/employee/CreateEmployeeController";
import { UpdateEmployeeController } from "./controllers/employee/UpdateEmployeeController";

const routes = Router();

//customers routes
routes.post('/customers', new CreateCustomerController().handle);
routes.put('/customers/:id', new UpdateCustomerController().handle);
routes.get('/customers', new FindCustomerController().handle);
routes.delete('/customers/:id', new DeleteCustomerController().handle);

//employee routes
routes.post('/employees', new CreateEmployeeController().handle);
routes.put('/employees/:id', new UpdateEmployeeController().handle);

export { routes }