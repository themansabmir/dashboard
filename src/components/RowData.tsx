import { useState} from 'react'
import { IRowData } from './IRow'


import UpdateUser from './UpdateUser'
import DeleteUser from './DeleteUser'
import Badge from './Badge'



interface Props{
    record: IRowData,
    deleteRecord:(e:any)=>void
}






const RowData = ({ record,deleteRecord }: Props) => {

    const [show,setShow]=useState<boolean>(false)

    const deleteConfirm = () => {
        setShow(!show)
    }


    const [showUpdate, setShowUpdate] = useState<boolean>(false)
    const update = () => {
        setShowUpdate(!showUpdate)
    }


  return (
      <>





                    <tr key={record.id} >
              <td className='p-3 text-sm text-gray-700' >
                  <span className='flex '>
                  <img className='rounded-full border-grey border-solid border-2 ' src={record.user.img} alt="" />

                      <span className='mx-2 py-2'> {record.user.name}
                    <br></br>{record.user.email}
                      </span>
                      </span>


                        </td  >
                        <td className='p-3 text-sm text-gray-700' ><Badge records={record} /></td>
                        <td className='p-3 text-sm text-gray-700' >{ record.role  }</td>
              <td className='p-3 text-sm text-gray-700' >{record.loginDate}</td>
              <td className='p-3 text-sm text-gray-700' >
              {
              show &&
          <DeleteUser id={record} deleteRecord={deleteRecord}  show={show} setShow={setShow} />
          }

              </td>
              <td className='p-3 text-sm text-gray-700' >  {
              showUpdate &&   <UpdateUser record={record}   showUpdate={showUpdate} setShowUpdate={setShowUpdate}    / >
          }</td>



<td >  <button onClick={deleteConfirm} className='p-1 text-sm bg-red-500 text-white border-2 rounded'>Delete </button></td>
              <td  ><button onClick={update} className='p-1 text-sm text-gray-500 border-2 rounded' >Update</button></td>


                    </tr>


                </>
  )
}

export default RowData