import { AsyncLocalStorage } from "async_hooks";

type AsyncLocalStorageStoreType = {
  correlationId: string;
};

export const asyncLocalStorage =
  new AsyncLocalStorage<AsyncLocalStorageStoreType>();

export const getCorrelationId = () => {
  const store = asyncLocalStorage.getStore();
  return store?.correlationId || "unknown-error-while-creating-correlation-id";
};
