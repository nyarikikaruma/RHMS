// server/models/Attendance.ts
import mongoose from 'mongoose'

const attendanceSchema = new mongoose.Schema({
    meetingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Meeting', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    shiftId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shift' },
    loginTime: { type: Date },
    logoutTime: { type: Date },
    status: {
        type: String,
        enum: ['Present', 'LoggedIn', 'LoggedOut', 'Absent'],
        default: 'Absent'
    },
    markedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true
})

export const Attendance = mongoose.model('Attendance', attendanceSchema)