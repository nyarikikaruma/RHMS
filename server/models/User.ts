// server/models/User.ts
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: {
        type: String,
        enum: ['SuperAdmin', 'Administrator', 'DataManager', 'ShiftLeader', 'Profile'],
        required: true
    },
    contact: { type: String, required: true },
    altar: { type: String, required: true },
    region: { type: String, required: true },
    worshipPastor: { type: String, required: true },
    worshipPastorContact: { type: String, required: true },
    bishop: { type: String, required: true },
    bishopContact: { type: String, required: true },
    uniqueCode: { type: String, required: true, unique: true },
    allocatedShift: { type: String },
    qrCode: { type: String },
    isSuspended: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true
})

export const User = mongoose.model('User', userSchema)