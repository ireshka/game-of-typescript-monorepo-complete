import { Board } from './Board';
import { Board as IBoard } from '@gameoflife/game-of-life-dto'

describe('Board Class', function () {
  it('should return id of board after adding a board', function () {
    const boardDb = new Board();
    const exampleBoard: IBoard = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(boardDb.init(exampleBoard)).toBe('0');
  });
  it('should change state of existing board', function () {
    const boardDb = new Board();
    const exampleBoard: IBoard = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    const changedBoard: IBoard = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    const idOfBoard = boardDb.init(exampleBoard);
    boardDb.changeStateOfBoard(idOfBoard, changedBoard);
    expect(boardDb.findBoard('0')).toEqual(changedBoard);
  });
});
