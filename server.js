import express from 'express';
import mongoose from 'mongoose';
import { Employee } from './models/employeeModel.js';
const app = express();

const port = process.env.PORT || 8000;
const url = process.env.MONGODB_URI;


app.use(express.json());
app.get('/', (req, res) => {
    res.send("Welcome to employee-management-API");
    console.log(req.url, req.method)
});

app.post('/employees', async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.position ||
            !req.body.department ||
            !req.body.salary
        ) {
            return res.status(400).json({
                message: "Please fill out all fields"
            });
        }

        const newEmployee = {
            name: req.body.name,
            position: req.body.position,
            department: req.body.department,
            salary: req.body.salary,
        }

        const employee = await Employee.create(newEmployee);
        console.log('Created successfully')
        return res.status(201).send(employee);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: message.error });
    }
})

app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find({});

        if (!employees) {
            return res.status(404).send({ message: "No employees found" })
        }

        console.log('Fetch successfully')
        res.status(201).send(employees);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: message.error });
    }
})

app.get('/employees/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findById(id);

        if (!employee) {
            return res.status(404).send({ message: "Employee id not found" })
        }

        console.log('Fetch successfully')
        res.status(201).send(employee);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: message.error });
    }
})

app.put('/employees/:id', async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.position ||
            !req.body.department ||
            !req.body.salary
        ) {
            return res.status(400).json({
                message: "Please fill out all fields"
            });
        }

        const { id } = req.params;
        const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true});

        if (!updatedEmployee) {
            return res.status(404).send({ message: "Employee id not found" })
        }

        console.log('Updated successfully')
        return res.status(201).send(updatedEmployee);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: message.error });
    }
})

app.delete('/employees/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByIdAndDelete(id);

        if (!employee) {
            return res.status(404).send({ message: "Employee id not found" })
        }

        console.log('Deleted successfully')
        res.status(201).send({ message: `Deleted employee with id of ${id}`});

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: message.error });
    }
})

mongoose.connect(url)
    .then(() => {
        console.log('Connected the database');
        app.listen(port, () => {
            console.log(`You're now connected to port ${port}`)
        });
    });


