import React, { useState,useEffect } from 'react'
// import arrowDown from './assets/arrow-down.svg';
import { useNavigate } from 'react-router-dom';
import { DetailsDispute } from './DetailsDispute';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const DataTemp = [

   {
      ID :2314028 ,Name: 'Raya Enterprises',Email:'rayaenterprises.ng' ,PhoneNo: '070456780',Website: 'rayaenterprises.ng',Dispute: 'Closed',
   },
   {
      ID :2314028 ,Name: 'Raya Enterprises',Email:'rayaenterprises.ng' ,PhoneNo: '070456782',Website: 'rayaenterprises.ng',Dispute: 'Closed',
   },
   {
      ID :2314028 ,Name: 'Raya Enterprises',Email:'rayaenterprises.ng' ,PhoneNo: '070456780',Website: 'rayaenterprises.ng',Dispute: 'Open',
   },
   {
      ID :2314028 ,Name: 'Raya Enterprises',Email:'rayaenterprises.ng' ,PhoneNo: '070456780',Website: 'rayaenterprises.ng',Dispute: 'Closed',
   },
   {
      ID :2314028 ,Name: 'Raya Enterprises',Email:'rayaenterprises.ng' ,PhoneNo: '070456780',Website: 'rayaenterprises.ng',Dispute: 'Closed',
   }
]
export const DisputeTab = (props) => {
const hideForMobile = `${props.width <= 800 ?'hidden':'block'}`
const router = useNavigate();
const ApiPrivate = useAxiosPrivate();

const [disputes, setDisputes] = useState ([]) 

async function getDisputes() {
   try {
      const response = await ApiPrivate.get('disputes/lawyer/');
      setDisputes(response?.data);
      console.log(response?.data);
   } catch (err) {
      if (err?.response?.status) {
      }
      console.log(err);
   }
}

useEffect(() => {
getDisputes()
}, []);



  return (
    <>
   {
      DataTemp.map(data => {
         const {ID,PhoneNo,Email,Website,Dispute,Name}= data
         return(
               <tbody className='w-full' key={Math.random()} onClick={() =>
      router(`/lawyer-dispute-details?requestId=${ID}`)
   } >
            <tr className='flex hover:bg-[#E4E4E54D] rounded-md cursor-pointer justify-between border-b px-2 pt-8 pb-2 items-end ' >
            <td>{ID}</td>
            <td className='text-center' >{Name}</td>
            <td className={hideForMobile} >{Email}</td>
            <td className={hideForMobile}>{PhoneNo}</td>
            <td className={hideForMobile}>{Website}</td>
            <td className = {`${Dispute === 'Closed'?'text-green-900':'text-red-900'} ${Dispute === 'Closed'?'bg-[#D1FADF]':'bg-[#FECDCA]'} p-2 rounded-sm w-[80px] text-center`} >{Dispute} </td>
               </tr>    
               </tbody>    

         )
      } )
            }   
            </>
  )
}