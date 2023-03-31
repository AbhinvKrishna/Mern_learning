const mongoose = require("mongoose");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: [{
        token:{
        type: String,
        required: true
        }
    }]


})

// we are hashing the password //

userSchema.pre('save', async function (next){

    console.log("hi from inside")

    if(this.isModified('password')){
        this.password = await bcrypt.hashSync(this.password, 12);
        this.cpassword = await bcrypt.hashSync(this.cpassword, 12);
    }
    next();
})

//We are generating token//
userSchema.methods.generateAuthToken = async function(){
    try {
        let tokenAK = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token: tokenAK});
        await this.save();
        return tokenAK;
    } catch (error) {
        console.log(error)
    }
}

const User = mongoose.model('USER', userSchema);

module.exports = User;

