import { Router } from 'express';
import { tbotCtx } from '../middlewares/tbot'
import config from '../config';
const routes = Router();

const tbotRoute = `/tbot/${config.tbot.accessKey}`;

routes.use(tbotRoute, tbotCtx);
routes.post(tbotRoute, tbotCtx);

export default routes;