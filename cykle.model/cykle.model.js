const mongoose = require ("mongoose");

const cykleSchema = new mongoose.Schema(
    {
        companyName : {
            type: String,
        },
        personName: {
            type: String,
        },
        companyEmail: {
            type: String,
        },
        briefOfProject: {
            type: String,
        },
        phoneNumber: {
            type: Number,
        },
    },
    {
        timestamps: true
    }
)

const cykleUserDetail = mongoose.model("cykleUserDetail", cykleSchema);
module.exports = cykleUserDetail;