import  { Dispatch, SetStateAction } from 'react'
import { IRowData } from './IRow'

interface Props{
    id: IRowData,
    deleteRecord: (e: any) => void
    show: boolean,
    setShow:Dispatch<SetStateAction<boolean>>
}

const DeleteUser= ({id, deleteRecord, show, setShow}:Props) => {
    return (
        <>

            <div className=" fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex  justify-center items-center ">
                <div className='bg-white p-5'>
                    <h1 className=''>Are You sure?</h1>

                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-5 px-4 rounded focus:outline-none focus:shadow-outline mr-10'

                        onClick={() => {deleteRecord(id.id)
                            }
                        }

                        >Yes</button>


                    <button
                        onClick={()=>setShow(!show)}
                         className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 mt-5 px-4 rounded focus:outline-none focus:shadow-outline '

                    >No</button>

                    </div>
                </div>
        </>
  )
}

export default DeleteUser