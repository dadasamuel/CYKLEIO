const mongoose = require("mongoose")

mongoose.set("strictQuery", false)
exports.connectDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/cykleDb")
        console.log("connected to cykle DB")
    } catch (error) {
        console.log(error);
    }
};