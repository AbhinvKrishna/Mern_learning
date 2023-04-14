const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");


require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res)=>{
    res.send('Hello World from the server router js')
});

//async-await method//
router.post('/register', async(req, res)=>{

    const { name, email, phone, work, password, cpassword} = req.body;

    if(!name|| !email|| !phone|| !work|| !password|| !cpassword){
        return res.status(422).json({error:"plz fill all the fields"})
    }

  try {

   const userExist = await User.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"Email Already exists"})
        }
        else if(password !== cpassword){
            return res.status(422).json({error:"Password is not matching"})
        }
        else{

            const user = new User({name, email, phone, work, password, cpassword})

            // yaha pe hashing password wala middleware work krega pehle//
    
          const userRegister= await user.save()
          return res.json(userRegister);
    
      
        }


  } catch (error) {
    console.log(error)
  }
})

//login route//

router.post('/signin', async (req, res) =>{
   /*  console.log(req.body);
    res.json({message:"Awesome"}) */

    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"please fill the data"})
        }

        const userLogin =  await User.findOne({email:email});

        //console.log(userLogin)

        if(userLogin){

        const isMatch = await  bcrypt.compare(password, userLogin.password)
        
        /* const token = await userLogin.generateAuthToken();
        console.log(token) */

        if(isMatch){
           return res.json({message:"user sign in successfully"});
        }
        else{
           return res.status(400).json({err:"please fill valid Credentials(pass)"})
        }
    }
    else{
       return res.status(400).json({err:"please fill valid Credentials"})   
    }

    } catch (error) {
        console.log(error);
    }
})






//-->**Alternate method <--**//

/* router.post('/register', (req, res)=>{

    const { name, email, phone, work, password, cpassword} = req.body;

    if(!name|| !email|| !phone|| !work|| !password|| !cpassword){
        return res.status(422).json({error:"plz fill all the fields"})
    }

    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"Email Already exists"})
        }

        const user = new User({name, email, phone, work, password, cpassword})

        user.save().then(()=>{
            res.status(201).json({message:"user registered successfuly"});
        }).catch((err)=>{
            res.status(500).json({error:"Failed to register"})
        })
    }).catch(err=>{ console.log(err)})

}) */

module.exports = router;