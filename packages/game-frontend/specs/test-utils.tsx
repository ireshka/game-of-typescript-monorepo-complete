import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';

import { BoardApiContext } from '../context/BoardApi.context';
import { MockService } from './mockService';

const AllTheProviders = ({ children }: { children: JSX.Element }) => {
  return <BoardApiContext.Provider value={{api: MockService}}>{children}</BoardApiContext.Provider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
