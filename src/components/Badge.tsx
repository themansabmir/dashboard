import React from 'react'
import { IRowData } from './IRow'

type Props={
    records:IRowData
}

const Badge = ({records}:Props) => {
  return (
      <div>
          {
              records.status ? <div className='bg-green-100 p-1 text-green-700 rounded-xl items-center'>
                 Active

              </div> :
                <div className='bg-red-100 p-1 text-red-700 rounded-xl items-center'>
          Invited
              </div>
          }


   </div>
  )
}

export default Badge