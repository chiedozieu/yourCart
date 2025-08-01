import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"]
    },
    description: {
        type: Array,
        required: [true, "Please enter product description"],
    },
    price: {
        type: Number,
        required: [true, "Please enter product price"],
    },
    offerPrice: {
        type: Number,
        required: [true, "Please enter offer price"],
    },
    image: {
        type: Array,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    inStock: {
        type: Boolean,
        default: true,
    },
},{timestamps: true});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;