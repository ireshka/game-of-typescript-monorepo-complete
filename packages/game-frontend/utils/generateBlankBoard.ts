import { Board, Row } from '@gameoflife/game-of-life';

const generateOneDimensionArray = (number: number): Row =>
  [...Array(number).keys()].map(() => 0);

export const generateBlankBoard = (number: number): Board => {
  return generateOneDimensionArray(number).map(() =>
    generateOneDimensionArray(number)
  );

};
