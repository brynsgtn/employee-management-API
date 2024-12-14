import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from 'react-router';
import Spinner from '../components/Spinner';

const Home = () => {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const url = 'https://employee-management-api-n3v4.onrender.com';

  useEffect(() => {
    axios
      .get(`${url}/api/employees`)
      .then((res) => {
        setEmployees(res.data)
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      })
  }, [])

  return (

    <div className='max-w-screen-lg mx-auto overflow-x-auto'>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <Spinner />
        </div>
      ) : (

        employees.length === 0 ? (
          <>
            <div className="flex flex-col justify-center items-center h-96 rounded-md shadow-md">
              <h1 className="text-xl text-gray-600 font-semibold">You have no employees</h1>
              <Link to='/addEmployee'>
                <h2 className="mt-5 text-blue-500 hover:text-blue-700 font-medium text-lg">
                  Add Employee
                </h2>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className='flex flex-row items-center mt-9'>
              <h1 className='text-3xl font-semibold'>Employee List</h1>
              <button className="bg-blue-500 text-white ms-auto py-1 px-2 rounded-md border-none hover:bg-blue-700 hover:border-blue-800" onClick={() => navigate('/addEmployee')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                </svg>
              </button>
            </div>
            <table className="min-w-full bg-white border border-gray-200 mt-10">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="text-left px-4 py-4 border-b border-gray-200">Employee ID</th>
                  <th className="text-left px-4 py-4 border-b border-gray-200">Name</th>
                  <th className="text-left px-4 py-4 border-b border-gray-200">Position</th>
                  <th className="text-left px-4 py-4 border-b border-gray-200">Department</th>
                  <th className="text-left px-4 py-4 border-b border-gray-200">Salary</th>
                  <th className="text-left px-4 py-4 border-b border-gray-200">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 border-b border-gray-200 odd:bg-gray-50 even:bg-white"
                  >
                    <td className="px-4 py-3">{row.employeeId}</td>
                    <td className="px-4 py-3">{row.name}</td>
                    <td className="px-4 py-3">{row.position}</td>
                    <td className="px-4 py-3">{row.department}</td>
                    <td className="px-4 py-3">
                      {row.salary.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td className="px-4 py-2 flex space-x-3">
                      <button className="text-blue-500 hover:text-blue-700">
                        <Link to={`/updateEmployee/${row._id}`}>
                          <PencilSquareIcon className="h-5 w-5" />
                        </Link>
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <Link to={`/deleteEmployee/${row._id}`}>
                          <TrashIcon className="h-5 w-5" />
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>

        )
      )}
    </div>
  )
}

export default Home;
