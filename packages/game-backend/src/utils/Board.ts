type Cell = number;
type Row = Cell[];
export type IBoard = Row[];

export class Board {
  private id: number;
  private boardObject: { key: IBoard } | Record<string, never>;
  constructor() {
    this.id = 0;
    this.boardObject = {};
  }
  public init(board: IBoard) {
    this.boardObject[this.id.toString()] = board;
    this.id += 1;
    return (this.id - 1).toString();
  }
  public findBoard(id: string) {
    return this.boardObject[id];
  }
  public changeStateOfBoard(id: string, newBoard: IBoard) {
    this.boardObject[id] = newBoard;
    return;
  }
}
