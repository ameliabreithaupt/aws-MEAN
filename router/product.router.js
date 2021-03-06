let express = require('express');
let router = express.Router(); //router reference
let ProductController = require("../controller/product.controller.js");

router.get("/allProductDetails",ProductController.getProductDetails);
router.get("/retrieveProductById/:pid",ProductController.getProductById);
router.post("/storeProductDetails",ProductController.storeProdectDetails);
router.delete("/deleteProductById/:pid",ProductController.deleteProdectDetails);
router.put("/updateProductPrice",ProductController.updateProdectDetails);



module.exports=router;