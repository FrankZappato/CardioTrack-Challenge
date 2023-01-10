import mongoose from "mongoose";
import TireModel from "./tiresModel";

const measurementSchema = mongoose.Schema({
    tire: TireModel,
    createdAt: {
        type: Date,
        default: new Date()
    },
    measurement: {
        type: Date,
        date: new Date(),
    }
});

const MeasurementModel = mongoose.model('measurementModel', measurementSchema);

export default MeasurementModel;