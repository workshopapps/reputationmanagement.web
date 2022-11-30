import Styled from 'styled-components'
import { FaStar } from 'react-icons/fa';
import React from 'react';

const Rating = () => {
    return (
        <>

            <RatingMain  data-testid="W-rating">
                <RatingContainer1>

                    <div className='container1a'>
                        <Heading1>
                            Over <span>500</span> reviews on Google and counting
                        </Heading1>

                        <p>Our users are really satisfied with our quality of service and therefore have left really good reviews about our products</p>

                        <div className='container1a-btn'>
                            What makes us stand out
                        </div>
                    </div>


                    <div className='container1b'>
                        <h1>4.7 <span>out of 5</span></h1>

                        <h3>4.7 <span>out of 5</span></h3>
                        <h3>4.7 <span>out of 5</span></h3>
                        <h3>4.7 <span>out of 5</span></h3>
                    </div>
                </RatingContainer1>



                <RatingContainer2>
                    <Heading1>Remove your negative <span>google reviews</span></Heading1>

                    <RatingStarMain>
                        <div>
                            <h2>Google</h2>
                            <div className='star-child'>
                                <div className='star-child-inner'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                </div>
                                <span>5.0</span>
                            </div>
                            <span className='star-date'>93 reviews as of 17/11/2022</span>
                        </div>

                        <div>
                            <h2>Spotify</h2>
                            <div className='star-child'>
                                <div className='star-child-inner'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                </div>
                                <span>5.0</span>
                            </div>
                            <span className='star-date'>93 reviews as of 17/11/2022</span>
                        </div>
                    </RatingStarMain>
                </RatingContainer2>
            </RatingMain>
        </>
    )
}

export default Rating

const RatingMain = Styled.div`
    display:flex;
    padding:0px 64px 0px 64px;
    margin-bottom:60px;
    margin-top:60px;
    flex-wrap:wrap;

    @media (max-width:1000px) {
            padding:0px 40px 0px 40px;
            }

   

`;

const RatingContainer1 = Styled.div`
flex-grow:8;
    padding:32px 41px 50px 41px;
  justify-content:space-between;
    display:flex;
    background-color:#233BA9;
    margin-right:24px;
    border-radius:8px;

    @media (max-width:1300px) {
        margin-bottom:30px;
        }

        @media (max-width:800px) {
            justify-content:center;
            align-items:center;
                flex-wrap:wrap;
            }

        @media (max-width:520px) {
            padding:32px 20px 50px 20px;
            margin-right:0;
            }

        

        .container1a {
            width:350px;

            @media (max-width:1000px) {
                width:250px;
            }

            p{
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: #FFFFFF;

            }

            .container1a-btn {
                font-weight: 700;
                font-size: 12px;
                line-height: 150%;
                color: #FC9A4A;
                margin-top:38px;
            }
        }

        .container1b {
           padding-left:100px;
           border-left:1px solid rgba(255, 255, 255, 0.2); 

           @media (max-width:1000px) {
            padding-left:30px;
            }

            h1 {
                font-weight: 700;
                font-size: 32px;
                line-height: 150%;
                color: white;
                margin-bottom:32px;

                span {
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 150%;
                    color: #BCBDBE;
                }
            }

            h3 {
                margin-bottom:12px;
                font-weight: 700;
                font-size: 12px;
                line-height: 150%;
                color: white;


                span {
                    color: #BCBDBE;
                }
            }
        }
`;


const RatingContainer2 = Styled.div`
flex-grow:1;
    display:flex;
    flex-direction:column;
    background-color:#233BA9;
    padding:24px 32px 24px 32px;
    position:relative;
    border-radius:8px;
`;

const Heading1 = Styled.h1`
color:white;
    font-size:24px;
    
    font-weight:600;
        span {
            color:#FC9A4A;
        }
`;

const RatingStarMain = Styled.h1`
     margin-top:100px;
    display:flex;
    justify-content:space-between;

    @media (max-width:1000px) {
          flex-wrap:wrap;
            }


    div {
        h2 {
            font-weight: 600;
            font-size: 16px;
            line-height: 150%;
            color: white;
        }

        .star-child{
           display:flex;
           align-items:center;
           //justify-content:center;
           
            .star-child-inner{
                color:#FC9A4A;
                display:flex;
               
            }

            span {
                color:white;
            }
        }

        .star-date {
            font-weight: 400;
            font-size: 10px;
            line-height: 150%;
            color: #BCBDBE;
        }

    }
`;



