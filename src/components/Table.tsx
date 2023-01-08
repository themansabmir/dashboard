import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import AddUser from './AddUser'

import { IRowData } from './IRow'
import RowData from './RowData'
import Pagination from './Pagination'



const deleteRecord = async (id: any) => {
    await axios.delete(`http://localhost:3000/users/${id}`)
    window.location.reload()

}
const getRecords = async () => {
    return await axios.get('http://localhost:3000/users/')
}





const Table: React.FC = () => {

    const [records, setRecords] = useState<IRowData[]>([])
    const [addUser, setAddUser] = useState<boolean>(false)

    const [recordPerPage] = useState<number>(5)
    const [currentPage, setCurrentPage] = useState<number>(1)

    let indexOfLastPost = currentPage * recordPerPage
    let indexOfFirstPost = indexOfLastPost - recordPerPage

    const [first, setFirst] = useState(0)
    const [last,setLast]= useState(5)

    const { isLoading, data } = useQuery('getRecords', getRecords)




    let currentUsers = records.slice(first, last)

    console.log(first, last);



    useEffect(() => {
        if(!isLoading)

        setRecords(data?.data)
    }, [isLoading])


    if (isLoading || records == null) {
        return (
            <h1>Loading...</h1>
        )
    }

        return (
            <div className='m-auto w-[80%] '>




            <h1 className='text-4xl'>Company Settings</h1>
            <span className='flex flex-row mt-4 '>
                    <button   className='border-2 px-1  py-1 '>General</button>
                    <button  className='border-2 px-1 py-1  '>Users</button>
                    <button  className='border-2 px-1 py-1  '>Plan</button>
                    <button  className='border-2 px-1 py-1  '>Billing</button>
                    <button  className='border-2 px-1 py-1  '>Integrations</button>
                </span>

                <div className='border-5'>
                <span className='relative top-[20px] text-xl'>Users {records.length} <br />
                  <span className='text-sm'> Manage your team members and their account permissions here</span>
                </span>
                <button className='inline-block rounded-lg float-right bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-500 py-2 px-4 border border-blue-500 hover:border-blue-500  w-36  mb-5 ' onClick={() => setAddUser(!addUser)}>+ ADD USER</button>
                <button className='rounded-lg mx-6 float-right bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-500 py-2 px-4 border border-blue-500 hover:border-blue-500  w-36  mb-5 '>Download CSV</button>

                </div>



                <table className='border-2  w-[100%] relative'>


                    <thead className='border-2'>

                        <tr className=''>
                            <th className='px-6 mx-4  text-sm font-semibold w-[50%] text-left  opacity-70 '>Name</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left opacity-70'>Status</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left opacity-70'>Role</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left opacity-70'>Last Login</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentUsers.map((record) => {
                                return <RowData deleteRecord={deleteRecord} record={record} />
                            }
                            )
                        }
                    </tbody>

                </table>
                <Pagination records={records}  first={first} last={last} setFirst={setFirst} setLast={setLast} />


                {
                        addUser && <AddUser addUser={addUser} setAddUser={setAddUser} getRecords={getRecords} />
                    }
            </div>
        )
    }

export default Table