import MeasurementModel from "../models/MeasurementModel.js";

export const getMeasurement = async (req, res) => {
    try {
        const measurement = await MeasurementModel.find();

        res.status(200).json(measurement);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createMeasurement = async (req, res) => {
    const measurement = req.body;

    const newMeasurement = new MeasurementModel(measurement);
    try {
        await newMeasurement.save();

        res.status(200).json(newMeasurement);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


