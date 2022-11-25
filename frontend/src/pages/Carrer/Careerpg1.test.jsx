import { render, screen } from '@testing-library/react';
import Carrerpg1 from './Carrerpg1';

test('should render contents of Career page', () => {
    render(<Carrerpg1 />);
    const headerElement = screen.getByText(/Let's grow together/i);
    const buttonElement = screen.getByText(/See all job openings/i);

    expect(headerElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
})