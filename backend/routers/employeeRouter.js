import express from 'express';
import { addEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee } from "../controllers/employeeController.js";

const router = express.Router();


router.post('/', addEmployee);

router.get('/', getEmployees);

router.get('/:id', getEmployee);

router.put('/:id', updateEmployee);

router.delete('/:id', deleteEmployee);

export default router;