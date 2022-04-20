import {
  GameDto,
  InitialResponseDto,
  TickRequestDto,
  TickResponseDto,
} from '../dto/index';
import axios from 'axios';
import { endpoints } from './endpoints';

export class GameOfLife {
  static async sendInitialBoard(request: GameDto): Promise<InitialResponseDto> {
    const resp = await axios.post(endpoints.SEND_INITIAL_BOARD, request);
    return resp.data as InitialResponseDto;
  }

  static async tick(request: TickRequestDto): Promise<TickResponseDto> {
    const resp = await axios.post(endpoints.TICK, request);
    return resp.data as TickResponseDto;
  }
}
