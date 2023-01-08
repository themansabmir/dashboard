import axios from 'axios'
import React,{  useState, Dispatch, SetStateAction } from 'react'
import { IRowData,IPerson } from './IRow'

type Props = {
    addUser: boolean,
    setAddUser:Dispatch<SetStateAction<boolean>>;
    getRecords():void
}


const AddUser = ({ getRecords,setAddUser,addUser }: Props) => {



    const [firstName,setFirstName]=useState<string>('')
    const [email,setEmail]=useState<string>('')
    const status = true

    const [role,setRole]=useState('')
    const loginDate =( new Date()).toString()
    const img="https://robohash.org/estquaeducimus.png?size=50x50&set=set1"

    const person: IPerson={
        name: firstName,
        email: email,
        img:img
    }
    const record: IRowData = {
        id: Math.random() * 1000,
        user: person,
        status: status,
        role: role,
        loginDate:loginDate
    }

    const submitHandler = async (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        await axios.post(`http://localhost:3000/users/`, record).then(() => {
            setAddUser(!addUser)
            window.location.reload()

        })

    }








    return (
        <>
            <div className=" fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex  justify-center items-center ">
                <div className='bg-grey'>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " >
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Full Name</label>
                    <input type="text"
                        name='fullName'
                        value={firstName}
                        onChange={(e) => { setFirstName(e.target.value) }}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

                    />
                        <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-2'>E-mail </label>


                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name='fullName' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <label htmlFor="" className='block text-gray-700 text-sm font-bold mb-2'>Role</label>


                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name='fullName' value={role} onChange={(e) => { setRole(e.target.value) }} />
                        <button type="submit" onClick={(e) => submitHandler(e)}
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-5 px-4 rounded focus:outline-none focus:shadow-outline'

                        > Add user</button>
                        <button onClick={()=>setAddUser(!addUser)}
                            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 mt-5 px-4 rounded focus:outline-none focus:shadow-outline'

                        > Cancel</button>


                    </form>
                    </div>
            </div>

      </>

  )
}

export default AddUser