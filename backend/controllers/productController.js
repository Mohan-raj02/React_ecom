const ProductModel = require('../models/productModel')

//Get products API - /api/v1/products
exports.getProducts = async (req, res, next) => {
    const query = req.query.keyword?{ name : { 
        $regex: req.query.keyword,
        $options: 'i'                                    // for case insensitive
    }}:{}

    const products = await ProductModel.find(query);


    res.json({
        success: true,
        products
    })
}

//Get Single product API - /api/v1/products/:id
exports.getSingleProduct = async (req, res, next) => {

    try {
        const product = await ProductModel.findById(req.params.id)
        res.json({
            success: true,
            product
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Unable to get product with that ID"
        })
    }
}
