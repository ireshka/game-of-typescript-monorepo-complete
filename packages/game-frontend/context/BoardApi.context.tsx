import * as React from 'react';
import { GameOfLife } from '../service/GameOfLife';

const apiInstance = new GameOfLife();

export const BoardApiContext = React.createContext<
  { api: GameOfLife } | undefined
>(undefined);

type BoardApiProviderProps = {
  children: JSX.Element;
};
export const BoardApiProvider = ({ children }: BoardApiProviderProps) => {
  const value = { api: apiInstance };
  return (
    <BoardApiContext.Provider value={value}>
      {children}
    </BoardApiContext.Provider>
  );
};

export const useBoardApi = () => {
  const context = React.useContext(BoardApiContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};
