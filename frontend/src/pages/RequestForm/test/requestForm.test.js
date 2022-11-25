import {render, screen} from "@testing-library/react"
import React from 'react'
import RequestForm from "../requestForm"
import { BrowserRouter as Router } from 'react-router-dom';

test("render Request form", () => {
    render(
       <Router>
			 <RequestForm/>
        </Router>
   
    )
    const header = screen.getByTestId("request-form")
    expect(header).toBeInTheDocument()
});

test('Placeholder text for email should be present', () => {
    render( 
        <Router>
            <RequestForm/>  
        </Router>)

     const email = screen.getByPlaceholderText('johndoe@gmail.com')
    expect(email).toBeInTheDocument();
    })