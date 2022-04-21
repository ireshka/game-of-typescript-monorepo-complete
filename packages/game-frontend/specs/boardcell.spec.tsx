/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from './test-utils';

import { BoardCell } from '../components/BoardCell';

describe('Board cell', () => {
  it('should render successfully', () => {
    const onClick = (a: number, b: number) => {};
    const { baseElement } = render(<BoardCell rowIndex={1} cellIndex={1} cellValue={1} onCellClick={onClick} />);
    expect(baseElement).toBeTruthy();
  });
});
