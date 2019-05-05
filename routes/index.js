const profile=require('./profile')
const auth=require('./auth')

module.exports=function(app){
    profile(app);
    auth(app);
}

