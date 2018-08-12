if(process.env.NODE_ENV === 'production'){
    //set keys for production
    module.exports = require('./prod')
}
else{
   module.exports = require('./dev')
}