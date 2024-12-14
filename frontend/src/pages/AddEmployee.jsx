import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import axios from 'axios'
import { useSnackbar } from 'notistack';

const AddEmployee = () => {

    const [name, setName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [position, setPosition] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState('');
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleAddEmployee = (e) => {
        e.preventDefault();
        const data = {
            name,
            employeeId,
            position,
            department,
            salary
        };

        axios
            .post('https://employee-management-api-n3v4.onrender.com/api/employees', data)
            .then(() => {
                console.log('Added!')
                enqueueSnackbar('Employee added!', { variant: 'success' })
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
                enqueueSnackbar('Please fill out all fields', { variant: 'error' });
            });
    }
    return (
        <>
            <div className='max-w-screen-lg mx-auto'>
                <form className='mt-10'>
                    <div className="space-y-12">
                        <h1 className='text-3xl mt-9 font-semibold'>Add Employee</h1>
                        <div className="border-b border-gray-900/10 pb-12 pt-1">
                            <h2 className="text-base/7 font-semibold text-gray-900">Employee Information</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">Please ensure all information, including full name, employee id position, and salary, is accurate.</p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
                                <div className="sm:col-span-2">
                                    <label htmlFor="full-name" className="block text-sm/6 font-medium text-gray-900">
                                        Full Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="full-name"
                                            name="full-name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="employee-id" className="block text-sm/6 font-medium text-gray-900">
                                        Employee ID
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="employee-id"
                                            name="employee-id"
                                            type="number"
                                            value={employeeId}
                                            onChange={(e) => setEmployeeId(e.target.value)}
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="position" className="block text-sm/6 font-medium text-gray-900">
                                        Position
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="position"
                                            name="position"
                                            value={position}
                                            onChange={(e) => setPosition(e.target.value)}
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        >
                                            <option value="">Select a Position</option>
                                            <option value="Fullstack Web Developer">Fullstack Web Developer</option>
                                            <option value="Web Designer">Web Designer</option>
                                            <option value="Tester">Tester</option>
                                            <option value="Project Manager">Project Manager</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="department" className="block text-sm/6 font-medium text-gray-900">
                                        Department
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="department"
                                            name="department"
                                            value={department}
                                            onChange={(e) => setDepartment(e.target.value)}
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        >
                                            <option value="">Select a Department</option>
                                            <option value="Information Technology">Information Technology</option>
                                            <option value="Software Engineering">Software Engineering</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="salary" className="block text-sm/6 font-medium text-gray-900">
                                        Salary
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="salary"
                                            name="salary"
                                            type="number"
                                            value={salary}
                                            onChange={(e) => setSalary(e.target.value)}
                                            autoComplete="street-address"
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm/6 font-semibold text-gray-900" onClick={() => navigate('/')}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={handleAddEmployee}
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddEmployee