import { Router } from "express";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { FindCustomerController } from "./controllers/FindCustomerController";
import { UpdateCustomerController } from "./controllers/UpdateCustomerController";

const routes = Router();

routes.post('/customers', new CreateCustomerController().handle);
routes.put('/customers/:id', new UpdateCustomerController().handle);
routes.get('/customers', new FindCustomerController().handle);
routes.delete('/customers/:id', new DeleteCustomerController().handle);

export { routes }