declare type RootState = ReturnType<typeof import("./index").store.getState>;
declare type RootDispatch = typeof import("./index").store.dispatch;
declare const store: typeof import("./index").store;
