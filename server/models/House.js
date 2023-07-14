import { Schema } from "mongoose";

export const HouseSchema = new Schema({
    bedrooms: { type: Number, required: true, max: 1000, min: 1 },
    bathrooms: { type: Number, required: true, max: 1000, min: 1 },
    year: { type: Number, required: true, max: 2025, min: 1700 },
    price: { type: Number, required: true, max: 10000000 },
    imgUrl: { type: String, required: true, default: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80', maxlength: 10000 },
    creatorId: { type: Schema.Types.ObjectId, required: true },
}, {
    timestamps: true, toJSON: { virtuals: true }
})