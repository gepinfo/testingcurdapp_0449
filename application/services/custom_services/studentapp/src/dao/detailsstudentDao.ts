import * as mongoose from 'mongoose';
import detailsstudentModel from '../models/detailsstudent';
import { CustomLogger } from '../config/Logger'


export class detailsstudentDao {
    private detailsstudent = detailsstudentModel;
    constructor() { }
    
    public async GpCreate(detailsstudentData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into detailsstudentDao.ts: GpCreate');

    let temp = new detailsstudentModel(detailsstudentData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from detailsstudentDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}