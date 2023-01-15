
const Users = require('../models/userModel');
const bcrypt = require('bcrypt');

const userRegister = async (req, res) => {
    try {
        const user = req.body;
        const isUserNameExists = await Users.findOne({ userName: user.userName });
        const isEmailExists = await Users.findOne({ email: user.email });
        if (isUserNameExists) {
            return res.json({ success: false, message: "User name already exists" });
        }

        if (isEmailExists) {
            return res.json({ success: false, message: "Email is already exists" });
        }

        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        const result = await Users.create(user);
        delete user.password;
        if (result) {
            res.status(200).json({ success: true, user, message: "successfully become the user" })
        }
    } catch (error) {
        console.log(error.message);
    }
};


const logIn = async (req, res) => {
    try {
        const userInfo = req.body;
        const user = await Users.findOne({ email: userInfo.email });
        if (!user) {
            return res.json({ success: false, message: "Incorrect username or password" })
        }

        const isPasswordMatched = await bcrypt.compare(userInfo.password, user.password);
        if (!isPasswordMatched) {
            return res.json({ success: false, message: "Incorrect username or password" })
        }
        res.json({ success: true, message: "Successfully log in", user })
    } catch (error) {
        console.log(error);
    }
}



const getAllUser = async (req, res) => {
    try {
        const users = await Users.find({});
        if (users) {
            res.json({ success: true, users })
        } else {
            res.json({ success: false, message: "users not found" })
        }
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = { userRegister, logIn, getAllUser }