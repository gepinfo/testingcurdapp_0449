import { Request, Response } from 'express';
import { detailsstudentService } from '../service/detailsstudentService';
import { CustomLogger } from '../config/Logger'
let detailsstudent = new detailsstudentService();

export class detailsstudentController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
detailsstudent.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailsstudentController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailsstudentController.ts: GpCreate');
    })}


}