import express from 'express';
import mongoose from 'mongoose';
import employeeRoutes from './routers/employeeRouter.js'
import colors from 'colors'
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());

const port = process.env.PORT || 8000;
const url = process.env.MONGODB_URI;

const __dirname = path.resolve();

app.use(express.json());


app.use((req, res, next) => { 
    const methodColors = {
        GET: 'green',
        POST: 'blue',
        PUT: 'yellow',
        DELETE: 'red'
    }

    const color = methodColors[req.method] || 'white';
    console.log(
        `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`[color]
    );
    next();
})

app.use('/api/employees', employeeRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

mongoose.connect(url)
    .then(() => {
        console.log('Connected the database'.green.inverse);
        app.listen(port, () => {
            console.log(`You're now connected to PORT: ${colors.bold(port.toString())}`.green.underline)
        });
    });


