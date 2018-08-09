if(process.env.NODE_ENV === 'production'){
    //set keys for production
    require('./prod')
}
else{
    require('./dev')
}