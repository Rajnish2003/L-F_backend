const Product=require("../Schema");

const getAllproducts = async (req, res, next) => {
    let products=await Product.find();
    if (!products) {
        return res.status(404).json({ message: "No product found" });
    }
    else
        return res.status(200).json({ products });
}

module.exports=getAllproducts;