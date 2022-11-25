import React from 'react'
import { StyledH2Center } from '../Styles/Body/Text.styled'
import { StyledQuestion } from './Support.styled'
import call from '../../assets/images/support/call.svg'
import mail from '../../assets/images/support/mail.svg'

const Question = () => {
  return (
    <StyledQuestion>
      <div className="max-w-4xl mx-auto">
        <StyledH2Center>
          Still got a question?
        </StyledH2Center>
        <p className='text-center md:w-8/12'>
          Always send us a message, we will get back to you shortly, Always send us a message , we will get back to you shortly.
        </p>
        <div className="md:flex cta justify-around">
          <div className="flex my-2">
            <img src={mail} alt="mail" width="20%" />
            <div className="px-7">
              <h4 className='font-bold'>
                Live Chat
              </h4>
              <p className=''>
                Get one -on-one support now
              </p>
            </div>
          </div>
          <div className="border border-black border-y-0 border-r-0"></div>
          <div className="flex my-2">
            <img src={call} alt="mail" width="20%" />
            <div className="px-7">
              <h4 className='font-bold'>
                Call Support
              </h4>
              <p className=''>
                Call +(234)-7354-1234
              </p>
            </div>
          </div>
        </div>

      </div>
    </StyledQuestion>
  )
}

export default Question