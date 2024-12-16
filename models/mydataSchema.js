const mongoose = require('mongoose');
const Schema =mongoose.Schema;

 const Registeration= new Schema ({
     FullName: String,
     Email: String,
     Address: String,
     Password:String,
     Photo:{
        data:Buffer,
        contentType:String
     }  
 });

 const User=mongoose.model("use",Registeration);



 module.exports=User;


