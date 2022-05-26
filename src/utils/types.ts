import { rootReducer } from 'store/rootReducer';
import { store } from 'store/store';

export type AppDispatchType = typeof store.dispatch;
export type AppRootStateType = ReturnType<typeof rootReducer>;
