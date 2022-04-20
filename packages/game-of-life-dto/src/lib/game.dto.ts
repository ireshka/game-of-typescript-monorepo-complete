import { ArrayNotEmpty } from 'class-validator';
import { Board } from './Board';

export class GameDto {
  @ArrayNotEmpty()
  board: Board;
}
