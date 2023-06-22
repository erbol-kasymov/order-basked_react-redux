export const ADD_ORDER = "ADD_ORDER";
export const PLUS_QUANTLY = "PLUS_QUANTLY";

export const add_order = (item) => ({
  type: ADD_ORDER,
  payload: item,
});

export const plus_quantly = (item) => ({
  type: PLUS_QUANTLY,
  payload: item,
});
