const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "course":{type:String,required:true},
        "title":{type:String,required:true},
        "description":{type:String,required:true},
        "date":{type:String,required:true},
        "duration":{type:String,required:true},
        "venue":{type:String,required:true},
        "trainer":{type:String,required:true}
    }
)
let coursemodel=mongoose.model("courses",schema);
module.exports={coursemodel}