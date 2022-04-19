
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const detailsstudentSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   age: String
})

const detailsstudentModel = mongoose.model('detailsstudent', detailsstudentSchema, 'detailsstudent');
export default detailsstudentModel;
