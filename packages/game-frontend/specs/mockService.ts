import {
  GameDto,
  InitialResponseDto,
  TickRequestDto,
  TickResponseDto,
} from '@gameoflife/game-of-life-dto';

export class MockService {
  static async sendInitialBoard(request: GameDto): Promise<InitialResponseDto> {
    const response: InitialResponseDto = { boardId: "20" };
    return response as InitialResponseDto;
  }

  static async tick(request: TickRequestDto): Promise<TickResponseDto> {
    return { status: 200, result: [[0, 0, 0]] } as TickResponseDto;
  }
}
