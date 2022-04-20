import { Injectable } from '@nestjs/common';
import { GameOfLife } from '@gameoflife/game-of-life';
import { InitialResponseDto } from '../dto/initialResponse.dto';
import { Board } from '../utils/Board';
import { TickRequestDto } from '../dto/tickRequest.dto';
import { BoardDto } from '../dto/board.dto';

@Injectable()
export class GameService {
  db = new Board();
  setInitialBoard(board: BoardDto): InitialResponseDto {
    console.log(board)
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
