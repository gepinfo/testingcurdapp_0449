import { Request, Response } from 'express';
import {detailsstudentDao} from '../dao/detailsstudentDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let detailsstudent = new detailsstudentDao();

export class detailsstudentService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailsstudentService.ts: GpGetAllValues')
     
     detailsstudent.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailsstudentService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
    
    
    
}