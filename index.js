const app = require("./app")
require("dotenv").config();
const cloudinary = require('cloudinary')
const connectWithDb = require("./config/db")

const {PORT} = process.env;
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET,
})
connectWithDb()
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT} 🔥`));