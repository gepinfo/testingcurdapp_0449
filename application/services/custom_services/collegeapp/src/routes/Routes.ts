import { Request, Response, NextFunction } from "express";
import { detailscollegeController } from '../controller/detailscollegeController';


export class Routes {
    private detailscollege: detailscollegeController = new detailscollegeController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/detailscollege').post(this.detailscollege.GpCreate);
     }

}