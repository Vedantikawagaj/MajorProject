const express = require('express');
const app=express();
const bodyParser = require("body-parser");
const dbConfig = require('./app/config/db.config');
const db = require('./app/models');
const Roles=db.role;
const cors = require('cors');
var corsoption = {
    origin:'http://localhost:8081'
};

app.use(cors(corsoption));
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
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
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/exam.routes')(app);
const port = process.env.PORT||8080;
app.listen(port,()=>{
    console.log('Listening on '+port);
})

function initializer(){
    Roles.estimatedDocumentCount((err,count)=>{
        if(!err && count===0)
        {
            new Roles({
                name:"student"
            }).save((err)=>{
                if(err)
                {
                    console.log(err);
                }
                else console.log("Student role added successfully")
            })
            new Roles({
                name:"teacher"
            }).save((err)=>{
                if(err)
                {
                    console.log(err);
                }
                else console.log("Teacher role added successfully")
            })
        }
    })
}