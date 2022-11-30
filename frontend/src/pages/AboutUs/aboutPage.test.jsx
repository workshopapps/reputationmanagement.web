import {render, screen} from "@testing-library/react"
import React from 'react'
import AboutPage from "./AboutPage"
import { BrowserRouter as Router } from 'react-router-dom';

test("render All AboutPage component in the document properly", () => {
    render(
       <Router>
			 <AboutPage/>
        </Router>
   
    )
    const heroComponent = screen.getByTestId("hero-element");
    const storyComponent = screen.getByTestId("story-element");
    const helpComponent = screen.getByTestId("help-element");
    const fixitComponent = screen.getByTestId("fixit-element");

    expect(heroComponent).toBeInTheDocument()
    expect(storyComponent).toBeInTheDocument()
    expect(helpComponent).toBeInTheDocument()
    expect(fixitComponent).toBeInTheDocument()
});