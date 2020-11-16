import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('是否有Button', () => {
  const wrapper = render(<App />);
  const buttonElement = wrapper.getByText('测试2222');
  expect(buttonElement).toBeTruthy();
});
