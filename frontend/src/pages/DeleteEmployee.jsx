import React from 'react'
import { useParams, useNavigate } from 'react-router';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import axios from 'axios';
import { useSnackbar } from 'notistack';

const DeleteEmployee = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    const url = 'https://employee-management-api-n3v4.onrender.com';

    const DeleteEmployee = () => {
        axios
            .delete(`${url}/api/employees/${id}`)
            .then(() => {
                console.log(`Delete employee with id of ${id}`)
                navigate('/')
                enqueueSnackbar('Employee deleted!', { variant: 'success' })
            })
            .catch((error) => {
                console.log(error);
                enqueueSnackbar('Error', { variant: 'error' });
              })
    }

  return (
    <div className="flex flex-col items-center justify-center mt-10 pt-10">
      <div className="w-full max-w-lg rounded-lg bg-white shadow-lg ">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-base font-semibold text-gray-900">
                Delete Employee ?
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure you want to delete this employee? All of the data will be permanently removed.
                  This action cannot be undone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            onClick={DeleteEmployee}
          >
            Delete
          </button>
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            onClick={() => navigate('/')}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteEmployee

