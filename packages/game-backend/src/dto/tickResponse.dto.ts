import { Board } from '@gameoflife/game-of-life';

export class TickResponseDto {
  status: number;
  result: Board;
}
