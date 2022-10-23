const express = require('express')
const connectDB = require("./config/db");
const  routes  = require("./routes/index.js");

//Process Environment COnfiguration
require('dotenv').config()

const app = express();

//Connection from DB call function
connectDB();

//bodyparser option
app.use(express.json({ extended: false }));

routes(app);   





const PORT = process.env.PORT || 3000 ;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
