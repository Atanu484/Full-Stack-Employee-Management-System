import React from 'react'

function AddEmployee() {
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
                
            </div>
        </div>
    )
}

export default AddEmployee
