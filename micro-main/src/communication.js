import { initGlobalState } from 'qiankun';

// 1. initialize state
const state = {
  origin: null,
  type: null,
  token: null,
};

// 2. register state
const actions = initGlobalState(state);

// 3. export actions
export default actions;
