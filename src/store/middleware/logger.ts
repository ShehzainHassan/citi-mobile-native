import type { Middleware, AnyAction } from '@reduxjs/toolkit';

export const loggerMiddleware: Middleware =
  store => next => (action: unknown) => {
    if (__DEV__) {
      const typedAction = action as AnyAction;
      console.group(`Redux Action: ${typedAction.type}`);
      console.log('Payload:', typedAction.payload);
      const result = next(typedAction);
      console.log('New State:', store.getState());
      console.groupEnd();
      return result;
    }

    return next(action);
  };
