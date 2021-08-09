import mongoose from 'mongoose';

const wineSchema = new mongoose.Schema({
    name: {type: String, require: true, unique: true},
    image: {type: String, require: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    stockCount: {type: Number, required: true}
}, {
    timestamps: true,
});

const Wine = mongoose.model("Wines", wineSchema);
export default Wine;