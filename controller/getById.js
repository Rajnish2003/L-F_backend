const Product=require("../Schema");

const getById = async (req, res, next) => {
    const id = req.params.id;
    let product=await Product.findById(id);
    if (!product) {
        return res.status(404).json({ message: "No product found" });
    }
    else
        return res.status(200).json({product});
}

module.exports=getById;