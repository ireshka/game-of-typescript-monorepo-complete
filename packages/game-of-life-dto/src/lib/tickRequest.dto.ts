import { IsNotEmpty, IsString } from 'class-validator';

export class TickRequestDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}
