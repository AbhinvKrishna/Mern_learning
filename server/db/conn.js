const mongoose = require("mongoose");

const DB=('mongodb://127.0.0.1:27017/registeration');

//mongodb+srv://akthakur:30August2003$1000@cluster0.lwuc1jg.mongodb.net/mernstack?retryWrites=true&w=majority

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connection successfull...")
}).catch((err)=>{ console.log(`No connection ${err}`)});