const express = require('express');
const router = express.Router();


var thingsCollection =[];
var thingsStruct = {
    "id":'uuid',
    "clase":'', 
    "seccion":'', 
    "cupos": 0, 
    "campus":'',
    "docente":''
};
thingsCollection.push(
    Object.assign(thingsStruct,{ "id":"1", "clase":"Matemáticas", "seccion":"1501", "cupos":"5", "campus":"María Auxiliadora","docente":"obetancourth"})
    );
    router.post('/', (req, res, next)=>{
        var newElement = Object.assign(thingsStruct, 
            req.body,
             {
           
             });
       
       thingsCollection.push(newElement);
        res.status(200).json(newElement);
    });
router.get('/', (req, res, next)=>{
    res.status(200).json(thingsCollection);

});
module.exports = router;       
