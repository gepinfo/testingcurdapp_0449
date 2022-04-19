import { Request, Response } from 'express';
import { detailscollegeService } from '../service/detailscollegeService';
import { CustomLogger } from '../config/Logger'
let detailscollege = new detailscollegeService();

export class detailscollegeController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
detailscollege.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into detailscollegeController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from detailscollegeController.ts: GpCreate');
    })}


}