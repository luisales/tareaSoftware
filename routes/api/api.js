const express = require('express');
const router = express.Router();

const thingsApi = require('./things');

router.get('/', (req, res, next)=>{
    // req = toda la petición de cliente
    // res = toda la respuesta que le vamos a dar al cliente 
    // next es un elemento porsi 
    res.status(200).json({"ok":"Version 1.0"});

});
router.use('/things', thingsApi);
//router.get('/hello', (req, res, next)=>{
//    res.status(200).json({"msg":"Hola mundo"});
//});
module.exports = router;