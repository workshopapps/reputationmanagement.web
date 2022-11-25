import React from 'react'
import { render,screen,fireEvent } from '@testing-library/react';
import Termsofuse from '../termsofuse'
import { BrowserRouter as Router } from 'react-router-dom';

test('should render Terms of Use Page', () => {
 render( <Router>
 <Termsofuse/>
 </Router>)
  const terms = screen.getByTestId('terms')
expect(terms).toBeInTheDocument();
 })
 test('Heading text should be present', () => {
   render( <Router>
   <Termsofuse/>  
   </Router>)
    const HeadText =screen.getByTestId('headingtext')
  expect(HeadText).toBeInTheDocument();
   })