import { render } from '@testing-library/react';
import App from '../app/app'
import React from 'react'

test('App renders successfully without crashing', () => {
  render(<App />);
});
