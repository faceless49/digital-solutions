import { useMemo } from 'react';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ActionCreatorsMapObject, bindActionCreators } from 'redux';

import { AppDispatchType, AppRootStateType } from './types';

export const useAppDispatch = (): any => useDispatch<AppDispatchType>();

export function useActions<T extends ActionCreatorsMapObject<any>>(actions: T): any {
  const dispatch = useAppDispatch();
  const boundActions = useMemo(() => bindActionCreators(actions, dispatch), []);
  return boundActions;
}

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
