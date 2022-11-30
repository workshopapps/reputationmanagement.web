import React from 'react'
import styled from 'styled-components'
import personIcon from './Assets/person_icon.svg'
import contactMailicon from './Assets/contact_mail.svg'
import messageIcon from './Assets/message_icon.svg'
import PageLayout from '../../layout/PageLayout'




const ContactPageWraper = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`


const ContactPageHeading = styled.div`
    text-align: center;
    margin-top: 72px;

    h1{
        font-size: 57px;
        font-weight: 700;
        color: #233BA9;

        span{
            color: #F16F04;
        }
    }

    @media screen and (max-width: 425px){
        margin-top: 18px;

        h1{
            font-size: 18px;
        }
    }
`

const ContactFormSection = styled.div.attrs(props => ({
    className: props.className
}))`


    display: flex;
    flex-direction: column;
    gap: 60px;
    margin-top: 70px;
    padding: 70px 126px;

    h3{
        text-align: center;
        font-weight: 700;
        font-size: 36px;
    }


    @media screen and (max-width: 425px){
        padding: 15px 50px;
        justify-content: center;
        margin-top: 18px;

        h3{
            font-size: 16px;
            font-weight: 600;
        }
    }
`

const ContactForm = styled.div.attrs(props => ({
    className: props.className
}))`
    

    &.form-2{
        display: flex;
        justify-content: flex-end;


        @media screen and (max-width: 425px){
            justify-content: unset;
        }
    }
    
    
`

const PersonalInfoForm = styled.div.attrs(props => ({
    className: props.className
}))`

    &.contact-form{
        width: 500px;
        background: #FFFFFF;
        border-radius: 12px;
        padding: 32px 32px 72px 32px;
        position: relative;


        > div{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 88px;
            height: 88px;
            border-radius: 50%;
            margin-top: -60px;
            margin-left: -20px;
            position: absolute;
            left: 0;
            top: 0;
            right: 100%;
            border: 1px solid #E8E8E8;
            background: #FFFFFF;
        }


        h4{
            font-weight: 600;
            font-size: 22px;
            color: #2B2C34;
            margin-top: 14px;
        }

        p{
            font-weight: 400;
            font-size: 16px;
            color: #2B2C34;
            margin-top: 24px;
        }

        form{
            margin-top: 24px;
        }

        form div{
            margin-top: 12px;
        }

        form div input{
            width: 70%;
            height: 50px;
            border: 1px solid #E8E8E8;
            border-radius: 15px;
            text-indent: 20px;
            &:focus{
                border: 1px solid #788BE3;
                outline: none;
            }
            
            &::placeholder{
                font-weight: 400;
                font-size: 14px;
                color: #BABABA;
            }
        }

        form div button{
            width: 120px;
            height: 40px;
            background: #233BA9;
            border: none;
            color: #FFFFFF;
            font-size: 16px;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 425px){
        &.contact-form{
            width: 100%;
            padding: 32px 16px;


            > div{
                width: 50px;
                height: 50px;
                left: 50%;
                margin-top: -20px;
    
                >img{
                    width: 70%;
                }
            }

            h4{
                font-size: 18px;
                font-weight: 700;
            }
            
            p{
                font-size: 16px;
            }

            form div input{
                width: 100%;
                height: 39px;
                border-radius: 8px;

                &::placeholder{
                    font-size: 12px;
                }
            }

            form div button{
                width: 80px;
                height: 30px;
                font-size: 12px;
            }
        }


    }

`

const ContactInfoForm = styled(PersonalInfoForm).attrs(props => ({
    className: props.className
}))`

    &.contact-info-form{

        form div button{
            background:  #E0E0E0;
        }

        > div{
            left: 93%;

            @media screen and (max-width: 425px){
                left: 50%;
                
            }
            
        }
    }


    form div button{
        background: #E0E0E0;
        color: #FFFFFF;
    }
   
`

const MessageForm = styled(PersonalInfoForm).attrs(props => ({
    className: props.className
}))`

    &.message-form{
        form div button{
            background: #E0E0E0;
        }
    }
    form div textarea{
        width: 80%;
        height: 174px;
        resize: none;
        border: 1px solid #E8E8E8;
        border-radius: 8px;
        padding: 12px;

        &:focus{
            outline: none;
            border: 1px solid #788BE3;
        }

        @media screen and (max-width: 425px){
            width: 90%;
        }
    }

`

function Contact() {
  return (
    <PageLayout>
        <ContactPageWraper className='contact-page'>

            <ContactPageHeading className='contact-heading'>
                <h1>Talk With Our Digital <span>Strategists</span></h1>
            </ContactPageHeading>
            <div className='bg-[#EEF1FC]'>

                <ContactFormSection className='contact-form-section' style={{ maxWidth: '1540px', margin: '0 auto'}}>
                
                    <h3>Get Started in 3 Easy Steps</h3>

                    <ContactForm className='form-1'>
                        <PersonalInfoForm className='contact-form'>
                            <div>
                                <img src={personIcon}/>
                            </div>

                            <h4 className='form-title'>#1 Personal Information</h4>

                            <p>Fill a request form with details of your personal information</p>

                            <form>
                                <div>
                                    <input placeholder='' />
                                </div>
                                <div>
                                    <input placeholder='Company/Organization' />
                                </div>
                                <div>
                                    <input placeholder='Email Address' />
                                </div>
                                <div>
                                    <input placeholder='Phone Number' />
                                </div>
                                <div>
                                    <button>Next</button>
                                </div>

                            </form>
                        </PersonalInfoForm>

                    </ContactForm>

                    <ContactForm className='form-2'>
                        <ContactInfoForm className='contact-form contact-info-form'>
                            <div>
                                <img src={contactMailicon}/>
                            </div>

                            <h4 className='form-title'>#2 Contact Information</h4>

                            <p>Fill a request form with details of your contact information</p>

                            <form>
                                <div>
                                    <input placeholder='Mailing Address'/>
                                </div>
                                <div>
                                    <input placeholder='Country'/>
                                </div>
                                <div>
                                    <input placeholder='City'/>
                                </div>
                                <div>
                                    <input placeholder='ZIP Code'/>
                                </div>
                                <div>
                                    <button>Next</button>
                                </div>
                            </form>
                        </ContactInfoForm>

                    </ContactForm>

                    <ContactForm className='form-3'>
                        <MessageForm className='contact-form message-form'>
                            <div>
                                <img src={messageIcon}/>
                            </div>

                            <h4 className='form-title'>#3 Message</h4>

                            <p>Kindly explain in detail the problem that you are currently experiencing</p>

                            <form>
                                <div>
                                    <textarea></textarea>
                                </div>
                                <div>
                                    <button>Finish</button>
                                </div>
                            </form>
                        </MessageForm>

                    </ContactForm>
                </ContactFormSection>
            </div>

        </ContactPageWraper>
    </PageLayout>
  )
}

export default Contact