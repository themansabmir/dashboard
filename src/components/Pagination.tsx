import React,{useState,Dispatch,SetStateAction} from 'react'
import { IRowData } from './IRow'

interface Props {
  records: IRowData[],

  first: number,
  setFirst: Dispatch<React.SetStateAction<number>>,
  setLast:Dispatch<React.SetStateAction<number>>,
  last:number
}



const Pagination = ({ records, first,last ,setFirst,setLast}: Props) => {
  const pageNumbers=[]

  for(let i=1;i<=Math.ceil(records.length/5);i++){
    pageNumbers.push(i)
  }



  const nextPage = () => {
    if (records.length > last) {
      setFirst(first + 5)
      setLast(last+5)
  } else {
      setFirst(0)
      setLast(5)
  }
  }

  const previousPage = () => {
    if (first<5) {
      setLast(records.length)
      setFirst(records.length-5)
    } else {
      setFirst(first - 5)
      setLast(last-5)
    }
  }

  console.log(pageNumbers)

  const pageNumber = (i: number) => {
    setFirst(i*5-5)
    setLast(i*5)

}




  return (
    <>
      <div className=" w-[100%] ">

      <button className='p-3 float-left  bg-transparent  text-black-900 opacity-80  py-2 m-2 px-4 rounded border-2 ' onClick={previousPage}> {'<- '} Previous</button>




        <button onClick={nextPage} className='p-3 float-right  bg-transparent  text-black-900 opacity-80  py-2 m-2 px-4 rounded border-2 ' > Next {'->'} </button>
        <div className='flex flex-row justify-center items-center' >

        {
          pageNumbers.map((i) => {
            return (<button className='my-2 py-2 border-2 p-5 ' onClick={()=>pageNumber(i)}>{ i}</button>)
          })
}
        </div>
</div>

    </>
  )
}

export default Pagination