import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { PencilSquareIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Link } from 'react-router';

const Home = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/employees')
      .then((res) => {
        setEmployees(res.data)
      })
  }, [employees])

  return (

    <div className='max-w-screen-lg mx-auto overflow-x-auto'>
      <div className='flex flex-row items-center'>
        <h1 className='text-3xl my-9 font-semibold'>Employee List</h1>
        <button className="bg-blue-500 text-white ms-auto py-2 px-3 rounded-md border-none hover:bg-blue-700 hover:border-blue-800">
          <Link to='/addEmployee'>
            Add Employee
          </Link>

        </button>

      </div>
      {employees.length === 0 ? (
        <h1>You have no employees</h1>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 mt-10">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border-b border-gray-200">Employee ID</th>
              <th className="text-left px-4 py-2 border-b border-gray-200">Name</th>
              <th className="text-left px-4 py-2 border-b border-gray-200">Position</th>
              <th className="text-left px-4 py-2 border-b border-gray-200">Department</th>
              <th className="text-left px-4 py-2 border-b border-gray-200">Salary</th>
              <th className="text-left px-4 py-2 border-b border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 border-b border-gray-200 odd:bg-gray-50 even:bg-white"
              >
                <td className="px-4 py-2">{row.employeeId}</td>
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.position}</td>
                <td className="px-4 py-2">{row.department}</td>
                <td className="px-4 py-2">
                  {row.salary.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td className="px-4 py-2 flex space-x-3">
                  <button className="text-blue-500 hover:text-blue-700">
                    <PencilSquareIcon className="h-5 w-5" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>

  )
}

export default Home;
