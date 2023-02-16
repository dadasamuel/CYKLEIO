const express = require("express");
const { connectDb } = require("./cykle.db/cykle.db");

const router = require("./cykle.routes/cykle.routes");

const app = express();
const port = 2228;

connectDb();
app.use(express.json());
app.get ("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to Cykle.io"
    });
});
app.use(router);

app.listen(port, () =>{
    console.log(`🚀🚀 srver up an unung on port ${port}`)
});

