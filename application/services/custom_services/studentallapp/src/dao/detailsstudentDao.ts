import * as mongoose from 'mongoose';
import detailsstudentModel from '../models/detailsstudent';
import { CustomLogger } from '../config/Logger'


export class detailsstudentDao {
    private detailsstudent = detailsstudentModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into detailsstudentDao.ts: GpGetAllValues');

    

    
    
    
    this.detailsstudent.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from detailsstudentDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}