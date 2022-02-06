const express = require('express');
const app=express();
const dbConfig = require('./app/config/db.config');
const db = require('./app/models');
const Role = require('./app/models/role.model');
const Roles=db.role;
const cors = require('cors');
var corsoption = {origin:'http://localhost:3000'};

app.use(cors(corsoption));
db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,{
    useNewUrlParser:true
}).then(()=>{
    console.log('Success');
    initializer();
}).catch(error=>{
    console.error(error);
    process.exit();
})
app.get('/',(req,res)=>{
    res.json({
        message:'Welcome',

    })
})
require('./app/routes/auth.routes');
require('./app/routes/user.routes');
const port = process.env.PORT||8080;
app.listen(port,()=>{
    console.log('Listening on '+port);
})

function initializer(){
    Roles.estimatedDocumentCount((err,count)=>{
        if(!err && count===0)
        {
            new Roles({
                name:"user"
            }).save((err)=>{
                if(err)
                {
                    console.log(err);
                }
                else console.log("User role added successfully")
            })
            new Roles({
                name:"admin"
            }).save((err)=>{
                if(err)
                {
                    console.log(err);
                }
                else console.log("Admin role added successfully")
            })
        }
    })
}