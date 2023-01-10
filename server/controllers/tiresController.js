import TireModel from "../models/tiresModel.js";

export const getTires = async (req, res) => {
    try {
        const tires = await TireModel.find();

        res.status(200).json(tires);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createTire = async (req, res) => {
    const tire = req.body;

    const newTire = new TireModel(tire);
    try {
        await newTire.save();

        res.status(200).json(newTire);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


