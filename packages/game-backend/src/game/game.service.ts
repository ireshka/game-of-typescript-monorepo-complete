import { Injectable } from '@nestjs/common';
import { GameOfLife } from '@gameoflife/game-of-life';
import { InitialResponseDto, TickRequestDto, GameDto } from '@gameoflife/game-of-life-dto';
import { Board } from '../utils/Board';

@Injectable()
export class GameService {
  db = new Board();
  setInitialBoard(board: GameDto): InitialResponseDto {
    return { boardId: this.db.init(board.board) };
  }

  sendBoardAfterTick(id: TickRequestDto) {
    const boardFromDb = this.db.findBoard(id.id);
    const boardAfterTick = new GameOfLife(boardFromDb).tick().getState();
    this.db.changeStateOfBoard(id.id, boardAfterTick);
    return {
      status: 200,
      result: boardAfterTick,
    };
  }
}
