const Product=require("../Schema");

const updateProducts = async (req, res, next) => {
    const id=req.params.id;
    const { name,writer,price,description,image} = req.body;
    let product= await Product.findByIdAndUpdate(id,{
            name,
            writer,
            price,
            description,
            image
        });
     await product.save();
    if (!product) {
        return res.status(500).json({ message: 'Unable to update' })
    }
    else {
        return res.status(201).json({product});
    }
}

module.exports=updateProducts;

