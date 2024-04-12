const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
// const open = require('open');

const User = require('./Modules/User.module');

app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://ikshit:ikshit123@backend.abswg.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend")
    .then(() => {
        console.log("Connected with MongoDB");
        app.listen(3000, () => {
            console.log("Server is Running on Port 3000");
            // var url = "http://localhost:3000/";
            
            // open(url);
        });
    })
    .catch(() => {
        console.log("Couldn't Connect to MongoDB");
    });

app.get('/', (req, res) => {
    res.send("Hello from Node nikal");
});

app.get('/findall', async (req, res) => {
    try {
        const user = await User.find();
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        console.error("Error finding the user", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.post('/adduser', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/deleteuser/:email', async (req, res)=>{
    try{
        const email = req.params.email;
        const deleteuser = await User.findOneAndDelete({email : email})
        if (!deleteuser){
            return res.status(404).json({message: 'User not Found'})
        }
        res.json({message: 'User Deleted Successfully'})
    }
    catch(err){
        console.log("User Cannot be deleted", err.message)
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

app.put('/update/:email', async (req, res) => {
  try {
    const email = req.params.email;
    const updateData = req.body; // Get the update data from the request body

    // Use findOneAndUpdate to find and update the user
    const updatedUser = await User.findOneAndUpdate({ email: email }, updateData, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User updated successfully', updatedUser });
  } catch (error) {
    console.error('Error updating user:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
