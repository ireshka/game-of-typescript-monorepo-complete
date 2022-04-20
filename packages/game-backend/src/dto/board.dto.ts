import {ArrayNotEmpty, IsNotEmpty} from "class-validator";


export class BoardDto {
  @ArrayNotEmpty()
  board: number[][];
}


