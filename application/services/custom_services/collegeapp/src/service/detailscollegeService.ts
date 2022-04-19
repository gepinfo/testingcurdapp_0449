import { Request, Response } from 'express';
import {detailscollegeDao} from '../dao/detailscollegeDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let detailscollege = new detailscollegeDao();

export class detailscollegeService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into detailscollegeService.ts: GpCreate')
     let  detailscollegeData = req.body;
     detailscollege.GpCreate(detailscollegeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from detailscollegeService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}