// server/models/Meeting.ts
import mongoose from 'mongoose'

const meetingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: {
        type: String,
        enum: ['Active', 'Closed'],
        default: 'Active'
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true
})

export const Meeting = mongoose.model('Meeting', meetingSchema)