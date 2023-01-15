
const Avatars = require('../models/avatarModal');

const getAvatar = async (req, res) => {
    try {
        const avatars = await Avatars.find({});
        res.json({
            success: true,
            message: "Successfully got the avatars",
            avatars
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = getAvatar;