let express = require('express');

let ctrl=require('./ctrl');

let productRouter = express.Router();

productRouter.get('/products',ctrl.get);
productRouter.post('/products', ctrl.post);

//GET ==Read no side effects
// POST Adding
// PUT Updating
//DELETE delting


module.exports = productRouter;