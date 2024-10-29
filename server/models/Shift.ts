// server/models/Shift.ts
import mongoose from 'mongoose'

const shiftSchema = new mongoose.Schema({
    meetingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Meeting', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    status: {
        type: String,
        enum: ['Pending', 'Active', 'LoginClosed', 'LogoutActive', 'Completed'],
        default: 'Pending'
    },
    shiftLeader: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    assistantShiftLeader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
})

export const Shift = mongoose.model('Shift', shiftSchema)