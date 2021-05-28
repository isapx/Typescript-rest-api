import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UserRoutes');
    }

    configureRoutes() {
        this.app.route(`/users`)
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(`Lista de usuarios`);
        })
        .post((req: express.Request, res: express.Response) => {
            res.status(200).send(`Post a usuarios`);
        });

    this.app.route(`/users/:userId`)
        .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
            // this middleware function runs before any request to /users/:userId
            // but it doesn't accomplish anything just yet---
            // it simply passes control to the next applicable function below using next()
            next();
        })
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(`GET solicitado para id ${req.params.userId}`);
        })
        .put((req: express.Request, res: express.Response) => {
            res.status(200).send(`PUT solicitado para id ${req.params.userId}`);
        })
        .patch((req: express.Request, res: express.Response) => {
            res.status(200).send(`PATCH solicitado para id ${req.params.userId}`);
        })
        .delete((req: express.Request, res: express.Response) => {
            res.status(200).send(`DELETE solicitado para id ${req.params.userId}`);
        });

    return this.app;
    }
}