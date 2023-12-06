const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'A username is required'],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        unique: true,
        trim: true
    },
    passwordHash: {
        type: String,
        required: [true, 'Password is required']
    },
    roles: {
        type: [String],
        default: ['user']
    },
    personalInfo: {
        fullName: {
            type: String,
            trim: true
        },
        address: String,
        phoneNumber: String
    },
    accountStatus: {
        isActive: {
            type: Boolean,
            default: true
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        isSuspended: {
            type: Boolean,
            default: false
        }
    },
    timestamps: {
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: Date
    },
    authTokens: {
        sessionToken: String,
        refreshToken: String
    },
    userPreferences: {
        language: {
            type: String,
            default: 'en'
        },
        interfaceSettings: mongoose.Schema.Types.Mixed
    },
    activityLog: [{
        activity: String,
        timestamp: {
            type: Date,
            default: Date.now
        }
    }]
});

const user = mongoose.model('Users', userSchema);
module.exports = user; 
