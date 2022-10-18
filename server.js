const express = require('express')
const connectDB = require("./config/db");

//Process Environment COnfiguration
require('dotenv').config()

const app = express();

//Connection from DB call function
connectDB();

//bodyparser option
app.use(express.json({ extended: false }));

app.use('/api/auth',require('./routes/authentication'));

const PORT = process.env.PORT || 3000 ;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
