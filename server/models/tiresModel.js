import mongoose from "mongoose";

const tireSchema = mongoose.Schema({
    brand: String,
    model: String,
    sizes: [Number],
    'pressure-limit': Number,
    createdAt: {
        type: Date,
        default: new Date()
    },
    lastMeassure: {
        type: Date,
        date: new Date(),
        size: Number
    }
});

const TireModel = mongoose.model('TireModel', tireSchema);

export default TireModel;