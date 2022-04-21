import { render } from './test-utils';

import Index from '../pages/index';


describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });

  it('should display page title', () => {
    const context = render(<Index />);
    expect(context.getByRole('heading')).toBeTruthy();
  })
});
