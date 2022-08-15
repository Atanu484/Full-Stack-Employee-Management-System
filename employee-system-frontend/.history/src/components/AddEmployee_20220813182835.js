import React from 'react'

function AddEmployee() {

    use

    return (
        <div className='flex max-w-2xl mx-auto shadow border-b'>
            <div className='px-8 py-8'>
                <div className="font-thin text-2xl tracking-wider">
                    <p>Add New Employee</p>
                </div>
                <div className='items-centre justify-centre h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                    <input type="text" className='h-10 w-96 border mt-2 px-2 py-2'></input>
                </div>
                <div className='items-centre justify-centre h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                    <input type="text" className='h-10 w-96 border mt-2 px-2 py-2'></input>
                </div>
                <div className='items-centre justify-centre h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Email</label>
                    <input type="email" className='h-10 w-96 border mt-2 px-2 py-2'></input>
                </div>
                <div className='items-centre justify-centre h-14 w-full my-4 space-x-5 pt-4'>
                    <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Save</button>
                    <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Clear</button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee
