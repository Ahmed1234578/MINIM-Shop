const mongoose = require('mongoose');
const Schema =mongoose.Schema;

 const AddDevice= new Schema ({
     Name: String,
     Price: Number,
     Description: String,
     RAM: Number,
     ScreenSpace:Number,
     Photo:String,
     image:{
        data:Buffer,
        contentType:String
     }  

    
 });

 const Device=mongoose.model("mydevice",AddDevice);



 module.exports=Device;