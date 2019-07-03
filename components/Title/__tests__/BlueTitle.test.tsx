import React from 'react';
import { render } from '@testing-library/react';
import { BlueTitle } from '../BlueTitle';

describe('BlueTitle', () => {
  test('Styled BlueTitle component', () => {
    const { container } = render(<BlueTitle>Test</BlueTitle>);
    expect(container).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('font-size', '50px');
    expect(container.firstChild).toHaveStyleRule('color', 'blue');
  });
});
