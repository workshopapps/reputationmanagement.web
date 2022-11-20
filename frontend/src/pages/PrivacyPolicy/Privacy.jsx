import React from 'react'
import { StyledPrivacy } from './Privacy.styled'


export default function Privacy() {
    return (
    <StyledPrivacy>
            <h3 className='header1'>Your Privacy Rights</h3>
            <p>As a user, you have the right to;</p>
         <ul className='ordered'>
             <li> Request access and obtain a copy of your personal information</li>
             <li> To request rectification</li>
                <li>To restrict the processing of your personal information.</li>
        </ul>
           <p className='para1'>You can make such requests by contacting us. We will consider and act upon your request by applicable data protection laws.</p> 
         
        
        </StyledPrivacy>
        )
}