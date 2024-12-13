import { Employee } from "../models/employeeModel.js";
import colors from 'colors'

export const addEmployee =  async (req, res) => {
    try {
        if (
            !req.body.name ||
            !req.body.employeeId ||
            !req.body.position ||
            !req.body.department ||
            !req.body.salary
        ) {
            console.log('Employee not added'.red)
            return res.status(400).json({
                message: "Please fill out all fields"
            });
        }

        const newEmployee = {
            name: req.body.name,
            employeeId: req.body.employeeId,
            position: req.body.position,
            department: req.body.department,
            salary: req.body.salary,
        }

        const employee = await Employee.create(newEmployee);
        console.log('Created successfully'.green)
        return res.status(201).send(employee);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: message.error });
    }
};

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({});

        if (!employees) {
            console.log('No emolyees found'.red)
            return res.status(404).send({ message: "No employees found" })
        }

        console.log('Fetch successfully'.green)
        res.status(201).send(employees);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: message.error });
    }
};

export const getEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findById(id);

        if (!employee) {
            console.log("Employee id not found".red);
            return res.status(404).send({ message: "Employee id not found" })
        }

        console.log('Fetch successfully'.green)
        res.status(201).send(employee);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: message.error });
    }
};

export const updateEmployee =  async (req, res) => {
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
            console.log("Employee id not found".red);
            return res.status(404).send({ message: "Employee id not found" })
        }

        console.log('Updated successfully'.green)
        return res.status(201).send(updatedEmployee);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: message.error });
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByIdAndDelete(id);

        if (!employee) {
            console.log("Employee id not found".red);
            return res.status(404).send({ message: "Employee id not found" })
        }

        console.log('Deleted successfully'.green)
        res.status(201).send({ message: `Deleted employee with id of ${id}`});

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: message.error });
    }
};

