import mongoose from "mongoose";

const tireSchema = mongoose.Schema({
    brand: String,
    model: String,
    size: Number,
    'pressure-limit': Number,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const TireModel = mongoose.model('TireModel', tireSchema);

export default TireModel;