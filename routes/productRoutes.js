const express = require("express");
const router = express.Router();
const getAllproducts=require("../controller/getAllproducts");
const addProducts=require("../controller/addProducts");
const getById=require("../controller/getById");
const deleteProducts=require("../controller/deleteProducts");
const updateProducts=require("../controller/updateProducts")

router.post("/",addProducts);
router.get("/",getAllproducts);
router.get("/:id",getById);
router.put("/:id",updateProducts);
router.delete("/:id",deleteProducts);

module.exports = router;