console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'production'){
    //set keys for production
    module.exports = require('./prod')
}
else{
   module.exports = require('./dev')
}