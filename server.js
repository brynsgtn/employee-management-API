import express from 'express';
import mongoose from 'mongoose';
import employeeRoutes from './routers/employeeRouter.js'
import colors from 'colors'

const app = express();

const port = process.env.PORT || 8000;
const url = process.env.MONGODB_URI;


app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to employee-management-API");
});

app.use((req, res, next) => { 
    const methodColors = {
        GET: 'green',
        POST: 'blue',
        PUT: 'yellow',
        DELETE: 'red'
    }

    const color = methodColors[req.method] || white;
    console.log(
        `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
        [color]
    );
    next();
})


app.use('/api/employees', employeeRoutes);

mongoose.connect(url)
    .then(() => {
        console.log('Connected the database'.green.inverse);
        app.listen(port, () => {
            console.log(`You're now connected to PORT: ${colors.bold(port.toString())}`.green.underline)
        });
    });


