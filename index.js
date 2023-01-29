const express = require('express');
const dotenv = require('dotenv').config();

const userRouter = require('./app/routes/user.route')
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api', userRouter);

app.listen(port, () => console.log(`initialized: ${port}`));