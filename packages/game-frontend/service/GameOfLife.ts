import {
  GameDto,
  InitialResponseDto,
  TickRequestDto,
  TickResponseDto,
} from '@gameoflife/game-of-life-dto';
import axios from 'axios';
import { endpoints } from './endpoints';

export class GameOfLife {
  async sendInitialBoard(request: GameDto): Promise<InitialResponseDto> {
    const resp = await axios.post(endpoints.SEND_INITIAL_BOARD, request);
    return resp.data as InitialResponseDto;
  }

  async tick(request: TickRequestDto): Promise<TickResponseDto> {
    const resp = await axios.post(endpoints.TICK, request);
    return resp.data as TickResponseDto;
  }
}
