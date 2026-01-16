export type StoreState = {
  order: string | undefined;
};

type StoreActions = {
  setOrder: (order: string | undefined) => void;
};

export type StoreStoreType = StoreState & StoreActions;
