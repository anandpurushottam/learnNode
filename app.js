const express=require('express')
const app=express();
const route=require('./routes/index')
var bodyParser = require('body-parser')

const port=process.env.PORT||5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

route(app);

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})