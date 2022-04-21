import { render } from './test-utils';

import Index from '../pages/index';


describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });

  it('should display page title', () => {
    const context = render(<Index />);
    expect(context.getByRole('heading')).toHaveTextContent(
      /Game of Typescript Life/i
    );
  });

  // it('should display <BoardWidget /> with starting elements', () => {
  //   const context = render(<Index />);
  //   expect(context.getByRole('button')).toHaveTextContent(/start game/i);
  //   expect(context.getAllByRole(''))
  // })
});
