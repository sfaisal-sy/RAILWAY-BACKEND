import express from "express";
const app = express();
app.use(express.json());

import userRouters from './ROUTES/userRoutes.js';
import env from 'dotenv';



app.use('/users', userRouters);



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`APP IS RUNNING AT PORT ${PORT}`)
});