import { render, screen } from '@testing-library/react';
import Privacy from './Privacy';

test('should render contents of Policy page', () => {
    render(<Privacy />);
    const headerElement = screen.getByText(/Privacy policy/i);

    expect(headerElement).toBeInTheDocument();
})