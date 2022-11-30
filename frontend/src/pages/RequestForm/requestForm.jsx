import styled from "styled-components";
//import ReactStars from 'react-stars'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Checkbox from "../../components/requestFormComponents/checkBox";
import Rate from "../../components/requestFormComponents/rating";
import Sidebar from '../../components/Reusables/Sidebar';
import WebAppNav from '../../components/Reusables/WebAppNav';
import {StyledDashboard, StyledContainer} from '../../components/Dashboard/Styles/Dashboard.styled';
import useAppContext from '../../hooks/useAppContext';
import Api from '../../api/axios'





const RequestForm = () => {
  const router = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [rating, setRating] = useState(0);///set initial state for rating

  //const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  const [ priority, setPriority ] = useState('')
  const [review, setReview] = useState("");
  const [websitename, setWebsiteName] = useState("");
  const [businesstype, setBusinessType] = useState("");
  //const [name, setName] = useState("");
  const { setRequestSuccessfulModalActive, allRequests } = useAppContext();


        // setAllRequests((prev) => {
      //   return [...prev,
      //     {
      //     id: Math.floor(Math.random() * 6),
      //     no: allRequests.length + 1,
      //     priority: priority,
      //     ticketName: websitename,
      //     source: google,
      //     lastUpdated: 'Now',
      //     status: 'Pending',
      //   }
      // ]
      // }

  const handleSubmit = async(e) => {
      e.preventDefault();
      setRequestSuccessfulModalActive(true);
      try{
        const response = await Api.post('/api/create', {
          id: Math.floor(Math.random() * 6),
          no: allRequests.length + 1,
          priority: priority,
          ticketName: websitename,
          source: 'google',
          lastUpdated: 'Now',
          status: 'Pending',
        }
      );
        console.log( response ? response.data: '')
        response && setRequestSuccessfulModalActive(true) && router('/request-successful')
      }
      catch(err){
        setRequestSuccessfulModalActive(false)
        console.log(err)
      }
  };
  
  return (
    <>
    <StyledDashboard>
    <Sidebar
				className={`${openMenu ? 'open' : ''}`}
				closeMenuHandler={() => setOpenMenu(false)}
			/>
			<WebAppNav openMenuHandler={() => setOpenMenu(true)} />
      <StyledContainer >
      <StyledContainers className="container" >

        <span className='container-title1'>Request Removal Form</span>

        <h2 className='container-title'>Kindly Fill in your complain</h2>
        {/********************START OF FORM*************************************************/}
        <form className='form'>

          <h4 className='form-heading'>Filling in the customer that drop the bad reviews data and the review dropped</h4>

          {/********************START OF FORM SECTION A*************************************************/}
          <div className='form-section-a'>

            <div className='text-input'>
              <label htmlFor="_name"> Name</label>
              <input type="text" name="_name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Full Name" id="name" required />
            </div>

            <div className='text-input'>
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="johndoe@gmail.com" id="email" required />
            </div>

            <div className='time-date-picker'>
              <div className='date-picker'>
                <label htmlFor="date"> Date of review</label>
                <input type="date" name="date" id="date" onChange={(e) => setDate(e.target.value)} required />
              </div>

              <div className='time-picker'>
                <label htmlFor="_name"> Time of review</label>
                <input type="time" name="time" id="time" required />
              </div>
            </div>

            <div className='bad-review'>
              <div className='bad-review-text'>
                <label>The bad review</label>
                <textarea value={review} onChange={(e) => setReview(e.target.value)} />
              </div>

              <div className='review-range'>
               
                <Rate rating={rating} onRating={(rate) => setRating(rate)} className="rate" />
               
                <label htmlFor="vol">Kindly selected the customer rating drop on your app/websites</label>
              </div>
            </div>

          </div>

          {/*****************************START OF FORM  SECTION B******************************************/}
          <div className='form-section-b'>
            <h2>Filling in your own details</h2>

            <div className='section-b-input'>
              <label htmlFor="name_of_website"> Name of your website or App</label>
              <input type="text" name="name_of_website" value={websitename} onChange={(e) => setWebsiteName(e.target.value)} placeholder="" required />
            </div>

            <div className='section-b-input'>
              <label htmlFor="business_type">What type of business do you run</label>
              <input type="text" name="business_type" value={businesstype} onChange={(e) => setBusinessType(e.target.value)} placeholder="" required />
            </div>

            <div className='priority-level'>
              <h3>Priority level</h3>

              <div>
                <Checkbox label="High" checked={true} onClick={() => setPriority('High')} />
              </div>

              <div>
                <Checkbox label="Medium" onClick={() => setPriority('Medium')} />
              </div>

              <div>
                <Checkbox label="Low" onClick={() => setPriority('Low')} />
              </div>

              <div>
                <Checkbox label="Not urgent"  onClick={() => setPriority('Not urgent')}/>
              </div>

            </div>

          </div>
          {/***************************************FORM SUBMIT BUTTON**********************************************/}
          <div className='btn-submit'>
            <button onClick={(e) => { e.preventDefault(); handleSubmit(e) }}>
              Submit
            </button>

          </div>
        </form>

      </StyledContainers>
      </StyledContainer>
      </StyledDashboard>
    </>
  );
}

export default RequestForm;



const StyledContainers = styled.div`
  
    padding-bottom: 50px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

      .container-title1 {
        font-size:20px;
        

      }
        .container-title {
          font-size:24px;
          margin-top: 40px;
        }

        .form {
       
          .form-heading {
            font-size: 16px;
          }

          .form-section-a {
            

            .text-input {
              display: flex;
              flex-direction: column;
              margin-top: 16px;
              label {
                font-size: 16px;
                margin-bottom: 10px;
              }

              input {
                height: 56px;
                padding: 0px 10px 0px 10px;
                border: 1px solid #D2D3D4;
                border-radius: 8px;
                font-size: 16px;
                outline: none;
              }
            }

            .time-date-picker {
              margin-top: 16px;
              width: 100%;
              display: flex;

              .date-picker, .time-picker {
                width: 160px;
                height: 69px;
                margin-right: 32px;

                label {
                  font-size: 16px;
                  margin-bottom: 10px;
                }

                input {
                  height: 40px;
                  padding: 0px 10px 0px 10px;
                  width: 100%;
                  border: 1px solid #D2D3D4;
                border-radius: 8px;
                outline: none;
                }
              }
            }

            .bad-review {
              margin-top: 16px;

              .bad-review-text {
                  display: flex;
                  flex-direction: column;
                label {
                  font-size: 16px;
                  margin-bottom: 10px;
                }
                textarea {
                  max-height: 190px;
                  height: 190px;
                  font-size: 16px;
                  border: 1px solid #D2D3D4;
                  border-radius: 8px;
                  padding: 15px;
                  outline: none;
                }
              }

              .review-range {
                display: flex;
                flex-direction: column;

              
                .rate {
                  width: 40px;
                  margin-top: 10px;
                  font-size: 50px;
                 

                }

                
                label {
                  margin-top: 10px;
                  font-size: 16px;
                }
              }
            }
          }


          .form-section-b {
            margin-top: 16px;
            h2 {
              font-size: 24px;
            }

            .section-b-input {
              margin-top: 16px;
              display: flex;
              flex-direction: column;

              label {
                font-size: 16px;
                margin-bottom: 10px;
              }

              input {
                height: 56px;
                padding: 0px 10px 0px 10px;
                border: 1px solid #D2D3D4;
                border-radius: 8px;
                font-size: 16px;
                outline: none;
              }

            }

            .priority-level {
              margin-top: 20px;
                    h3 {
                      font-size: 16px;
                    }

                    div {
                      margin-top: 8px;
                      display: flex;
                      align-items: center;
                    }
            }
          }

          .btn-submit {
            margin-top: 32px;
              display: flex;
              justify-content: flex-end;

                button{
                  width: 220px;
                  height: 59px;
                  background: #233BA9;
                  border-radius: 4px;
                  padding: 16px 24px;
                  font-size: 18px;
                  border: none;
                  color: white;
                  transition: 0.5s;

                  &:hover {
                    background: #0a1d88;
                  }
                }

                @media (max-width: 500px) {
                  justify-content: center;

                  button {
                    width: 100%;
                  }
                }
          }


        }

     
`;