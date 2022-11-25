import { render, screen } from '@testing-library/react';
import Carrerpg2 from './Carrerpg2';

test('should render contents of Career page', () => {
    render(<Carrerpg2 />);
    const headerElement = screen.getByText(/Let's grow together/i);
    const buttonElement = screen.getByText(/Search/i);

    expect(headerElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
})