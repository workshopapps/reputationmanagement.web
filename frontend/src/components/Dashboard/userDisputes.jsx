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
      const response = await ApiPrivate.get('api/disputes/Customer');
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
Reason
</Th>

          <Th>
Status
</Th>
</tr>
</thead>
</table>
          <main className='mt-5' >
          <TableContain className='table w-full mb-0' >
          {
      disputes.length > 0 ?
      disputes.map((data,index)=> {
         const {ID,PhoneNo,Email,Website,Dispute,status,reason,complaint}= data
         return(
               <tbody className='w-full' key={index+1}  >
            <tr className='flex hover:bg-[#E4E4E54D] rounded-md cursor-pointer pt-2 pb-2  justify-between border-b px-2 items-end ' >
            <td className='w-[15%]' >{index+1}</td>
            <td className='text-left w-[25%]' >{complaint}</td>
            <td className='text-left w-1/5' >{reason === 0 && 'Unresolved' }
            {reason === 1  && 'Delayed' }
            {(reason !==0  &&  reason !==1) && 'Other'  }
            </td>

            <Status className = {`${status === 1?'text-green-900':'text-red-900'} ${status === 1?'bg-[#D1FADF]':'bg-[#FECDCA]'} px-[1] py-[1] rounded-sm w-[80px] flex items-center justify-center text-center`} >{status === 1?'Closed':'Open'} </Status>
               </tr>    
               </tbody>    

         )
      } )
      :
      <td className='text-4xl leading pt-5 font-bold text-center ' > No Disputes At This Time </td>
            }   


</TableContain>   
          </main>

          </Wrapper>
    </DisputeContainer>
    </>
  )
}

const DisputeContainer = styled.div`
${'' /* margin-left:280px; */}
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
const TableContain = styled.table`
	width: 100%;
	margin-bottom: 4rem;

	&,
	tr,
	td {
		border-collapse: collapse;
	}

	thead tr {
		border-bottom: 1px solid #e4e4e5;
	}

	tbody tr {
		border-bottom: 1px solid #d2d3d4;
	}
	thead {
		background: rgba(228, 228, 229, 0.3);
	}
	@media (max-width: 400px) {
		td:first-child {
			width: 20px;
		}
	}
	th {
		text-align: left;
		padding: 19px 28px 12px 0;
		font-weight: 600;
		font-size: 22px;
		line-height: 33px;
		color: #2b2c34;

		&:first-child {
			padding-left: 16px;
		}
	}

	td {
		padding-top: 18px;
		padding-bottom: 18px;

		&:first-child {
			padding-left: 16px;
		}

		&:nth-of-type(1) {
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
			color: #292d32;
		}
		&:nth-of-type(2) {
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
			color: #292d32;
		}

		&:nth-of-type(3) p {
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
			color: #292d32;
			padding-left: 30px;
		}
		&:nth-of-type(4) p {
			background: rgba(1, 176, 216, 0.15);
			border-radius: 4px;
			padding: 8px 16px;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			width: fit-content;
			// width: 70%;
			color: #01586c;
			white-space: nowrap;
		}

		&:nth-of-type(5) p {
			font-weight: 700;
			font-size: 16px;
			line-height: 24px;
			color: #8f9093;
		}
	}



	@media (max-width: 900px) {
		th,
		td {
		}
	}
	@media (max-width: 820px) {
		th,
		td {
			font-size: 16px;
			line-height: 20px;
		}
		td {
			}
			&:nth-of-type(4) p {
				padding-left: 25px;
			}
		}
	}
	${'' /* @media (max-width: 600px) {
	} */}
	@media (max-width: 438px) {
		td:first-child {
			padding-left: 0 !important;
		}
		td:nth-of-type(3) p {
			padding-left: 0 !important;
		}
	}
`;

export default UserDisputes