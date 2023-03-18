const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');


const SALT_ROUNDS = 6;

const userSchema = new Schema({
    user: {type: String, required: true},
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minlength: 6,
        required: true
    }
} , {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
});

module.exports = model('User', userSchema);