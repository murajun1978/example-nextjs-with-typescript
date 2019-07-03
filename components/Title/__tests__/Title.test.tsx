import React from 'react';
import { render } from '@testing-library/react';
import { Title } from '../Title';

describe('Title', () => {
  test('Styled Title component', () => {
    const { container } = render(<Title>Test</Title>);
    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('font-size', '50px');
  });
});
