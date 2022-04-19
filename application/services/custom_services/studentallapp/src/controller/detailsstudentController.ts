import { Request, Response } from 'express';
import { detailsstudentService } from '../service/detailsstudentService';
import { CustomLogger } from '../config/Logger'
let detailsstudent = new detailsstudentService();

export class detailsstudentController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
detailsstudent.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailsstudentController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailsstudentController.ts: GpGetAllValues');
    })}


}