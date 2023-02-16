const cykleUserDetail = require("../cykle.model/cykle.model");


exports.createClient = async (req, res) => {
    try {
        const { companyName, personName, companyEmail, briefOfProject, phoneNumber } = req.body;
        // to validate user detail
        if (!(companyName && personName && companyEmail && briefOfProject && phoneNumber)) {
            return res.status(401).json({
                message: "All fields are required"
            })
        }
        const addClient = await cykleUserDetail.create({
            companyName, personName, companyEmail, briefOfProject, phoneNumber
        })
        return res.status(201).json({
            message: "Client data added successfully",
            addClient
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

exports.totalNumberClients = async (req, res) => {
    try {
        const totalNumber = await cykleUserDetail.estimatedDocumentCount();
        return res.status(200).json({
            message: `There are ${totalNumber} clients`
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

exports.projectDetail = async (req, res) => {
        const companyEmail = req.params.companyEmail;
    try {
        const newProjectDetail = await cykleUserDetail.find({companyEmail});
        return res.status(200).json({
            newProjectDetail
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}
