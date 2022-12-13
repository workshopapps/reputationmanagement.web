import React,{ useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Sidebar from '../Reusables/Sidebar';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import styled from 'styled-components';
import { TableContainer } from '../../components/Dashboard/Styles/Dashboard.styled';
const UserDisputes = () => {
   const [width,setWidth] = useState(window.innerWidth)
   useEffect(()=>
   { 
window.addEventListener('resize',() => { 
setWidth(window.innerWidth)
})

   }
   ,[window.innerWidth])
const hideMobile = `${width <= 800 ?'hidden':'block'}`

const ApiPrivate = useAxiosPrivate();

const [disputes, setDisputes] = useState ([]) 

async function getDisputes() {
   try {
      const response = await ApiPrivate.get('api/disputes/Customer/');
      setDisputes(response?.data);
      console.log('here',response?.data);
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
    <Sidebar/>
    <DisputeContainer className='px-1 mt-12 md:px-10' >
    <Wrapper>
          <header>
          <h1 className='text-2xl leading pb-5 '>My Disputes</h1>
          <hr/>
          </header>
          <table className='table w-full'>
          <thead className='table w-full' >
<tr className='flex justify-between bg-[#E4E4E54D] px-3 py-3' >
          <Th>
ID
</Th>
          <Th>
Complaint
</Th>
          <Th>
Status
</Th>
</tr>
</thead>
</table>
          <main className='mt-5' >
          <TableContainer className='table w-full mb-0' >
          {
      disputes.length > 0 ?
      disputes.map((data,index)=> {
         const {ID,PhoneNo,Email,Website,Dispute,complaint}= data
         return(
               <tbody className='w-full' key={index+1}  >
            <tr className='flex hover:bg-[#E4E4E54D] rounded-md cursor-pointer pt-2 pb-2 justify-between border-b px-2 items-end ' >
            <td>{index+1}</td>
            <td className='text-center' >{complaint}</td>
            <Status className = {`${Dispute === 'Closed'?'text-green-900':'text-red-900'} ${Dispute === 'Closed'?'bg-[#D1FADF]':'bg-[#FECDCA]'} px-[1] py-[1] rounded-sm w-[80px] flex items-center justify-center text-center`} >{Dispute} </Status>
               </tr>    
               </tbody>    

         )
      } )
      :
      <td className='text-4xl leading pt-5 font-bold text-center ' > No Disputes At This Time </td>
            }   


</TableContainer>   
          </main>

          </Wrapper>
    </DisputeContainer>
    </>
  )
}

const DisputeContainer = styled.div`
margin-left:280px;
@media(max-width:1000px){
margin-left:0px;
${'' /* animation: ${appear} .7s; */}
}
`
const Wrapper = styled.div`
${'' /* box-shadow: 2px 2px 8px #00000040; */}
padding:1em 1.5em;
border-radius:1em;
border : 1px solid #00000010;
`
const Th = styled.th`
font-size:1.5rem;
font-weight:500;
`
const Status = styled.td`
padding:0px;
height:40px;
align-self:center;
`
export default UserDisputes