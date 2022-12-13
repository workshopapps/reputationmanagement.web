import React, { useState,useEffect } from 'react'
// import arrowDown from './assets/arrow-down.svg';
import { useNavigate } from 'react-router-dom';
import { DetailsDispute } from './DetailsDispute';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import styled,{ keyframes} from 'styled-components';

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
      const response = await ApiPrivate.get('api/disputes/lawyer/');
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
      disputes.length > 0 ?
      disputes.map((data,index)=> {
         const {ID,status,badReviewerEmail,complaint,Dispute,businessEntityName}= data
         return(
               <tbody className='w-full' key={index+1} onClick={() =>
      router(`/lawyer-dispute-details?requestId=${ID}&status=${data.id} `)
   } >
            <tr className='flex hover:bg-[#E4E4E54D] rounded-md cursor-pointer pt-2 pb-2 justify-between border-b px-2 items-end ' >
            <td>{index+1}</td>
                        <td className='text-center' >{badReviewerEmail}</td>
            <td  >{businessEntityName}</td>
            <td  >{complaint}</td>
            <Status className = {`${status === 1 ?'text-green-900':'text-red-900'} ${status === '1'?'bg-[#D1FADF]':'bg-[#FECDCA]'} px-[1] py-[1] rounded-sm w-[80px] flex items-center justify-center text-center`} > {status === 1 ?'Closed':'Open'} </Status>
               </tr>    
               </tbody>    

         )
      } )
      :
      <EmptyDisputes className='text-4xl leading pt-5 font-bold text-center ' > No Disputes At This Time </EmptyDisputes>
            }   
            </>
  )
}
const appear = keyframes`
0%{
  transform:translateY(-100%);
  opacity:0;
}
100%{
  transform:translateY(0%);
  opacity:1;
}
`

const EmptyDisputes = styled.h2`
animation:${appear} .7s;
`
const Status = styled.td`
padding:0px;
height:40px;
align-self:center;
@media(max-width:600px){
   display:flex;
}
`