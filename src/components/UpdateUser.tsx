import axios from 'axios'
import React,{useState, Dispatch, SetStateAction} from 'react'
import { IRowData,IPerson } from './IRow'


interface Props{
    record: IRowData,
    showUpdate: boolean,
    setShowUpdate:Dispatch<SetStateAction<boolean>>;

}


const UpdateUser = ({record, showUpdate, setShowUpdate}:Props) => {
    const [firstName, setFirstName] = useState<string>('')
    const [role, setRole] = useState('')



    const person: IPerson = {
        name: firstName,
        email:record.user.email ,
        img:record.user.img
    }
    const updateData: IRowData = {
        id: record.id,
        user: person,
        status: record.status,
        role: role,
        loginDate: record.loginDate
    }

    const submitHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        await axios.put(`${process.env.REACT_APP_API}/${record.id}`, updateData).then(() => {
  
            setShowUpdate(!showUpdate)
            window.location.reload()
        })
    }





        return (
            <>
                <div className=" fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex  justify-center items-center ">
                    <div className='bg-white p-5'>
                        <label >Name:</label>

                        <input type="text" name='fullName' value={firstName} onChange={(e) => { setFirstName(e.target.value) }}
                              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
                        <label >Role:</label>
                        <input type="text" name='fullName' value={role} onChange={(e) => { setRole(e.target.value) }}
                              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />


                        <button
                            onClick={(e) => submitHandler(e)}
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-5 px-4 rounded focus:outline-none focus:shadow-outline mr-10' >Submit</button>
                        <button
                            onClick={()=>setShowUpdate(!showUpdate)}
                            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 mt-5 px-4 rounded focus:outline-none focus:shadow-outline '
                        >Cancel</button>
                </div>
                </div>
            </>
        )
    }


export default UpdateUser





