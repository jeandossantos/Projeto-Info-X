import { Router } from "express";

import { CreateClientController } from "./controllers/client/CreateClientController";
import { DeleteClientController } from "./controllers/client/DeleteClientController";
import { FindClientsController } from "./controllers/client/FindClientsController";
import { UpdateClientController } from "./controllers/client/UpdateClientController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserService";
import { FindUsersController } from "./controllers/user/FindUsersController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { FindOrdersController } from "./controllers/order/FindOrdersController";
import { UpdateOrderController } from "./controllers/order/UpdateOrderController";
import { CreateSituationController } from "./controllers/situation/CreateSituationController";
import { DeleteSituationController } from "./controllers/situation/DeleteSituacionService";
import { FindSituationsController } from "./controllers/situation/FindSituationsController";
import { UpdateSituationController } from "./controllers/situation/UpdateSituationController";
import { AuthenticateUserController } from "./controllers/user/AuthenticateUSerController";
import { ensureAuthenticated } from "./middlewares/EnsureAuthenticated";

const routes = Router();

routes.post('/signin', new AuthenticateUserController().handle);

//customers routes
routes.post('/clients', new CreateClientController().handle);
routes.put('/clients/:id', new UpdateClientController().handle);
routes.get('/clients', new FindClientsController().handle);
routes.delete('/clients/:id', new DeleteClientController().handle);

//users routes
routes.post('/users', new CreateUserController().handle);
routes.put('/users/:id', new UpdateUserController().handle);
routes.get('/users', new FindUsersController().handle);
routes.delete('/users/:id', new DeleteUserController().handle);

//situations routes
routes.post('/situation', new CreateSituationController().handle);
routes.get('/situation', new FindSituationsController().handle);
routes.put('/situation/:id', new UpdateSituationController().handle);
routes.delete('/situation/:id', new DeleteSituationController().handle);

// orders routes
routes.post('/orders', new CreateOrderController().handle);
routes.get('/orders', new FindOrdersController().handle);
routes.put('/orders/:id', new UpdateOrderController().handle);

export { routes }