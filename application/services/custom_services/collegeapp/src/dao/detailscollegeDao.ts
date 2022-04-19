import * as mongoose from 'mongoose';
import detailscollegeModel from '../models/detailscollege';
import { CustomLogger } from '../config/Logger'


export class detailscollegeDao {
    private detailscollege = detailscollegeModel;
    constructor() { }
    
    public async GpCreate(detailscollegeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into detailscollegeDao.ts: GpCreate');

    let temp = new detailscollegeModel(detailscollegeData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from detailscollegeDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}