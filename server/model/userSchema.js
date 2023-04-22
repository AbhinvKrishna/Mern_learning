const mongoose = require("mongoose");
const dotenv = require("dotenv");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

dotenv.config({path:'./config.env'});


const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    work: {
        type: String
    },
    password: {
        type: String
    },
    cpassword: {
        type: String
    },
    tokens: [{
        token:{
        type: String
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
});

//We are generating token//
userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error)
    }
}

const User = mongoose.model('USER', userSchema);

module.exports = User;

