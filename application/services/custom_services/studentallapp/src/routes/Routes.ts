import { Request, Response, NextFunction } from "express";
import { detailsstudentController } from '../controller/detailsstudentController';


export class Routes {
    private detailsstudent: detailsstudentController = new detailsstudentController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/detailsstudent').get(this.detailsstudent.GpGetAllValues);
     }

}