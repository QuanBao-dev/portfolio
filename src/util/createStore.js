import { BehaviorSubject } from "rxjs";
const behaviorSubject = new BehaviorSubject();
const createStore = (initialState) => {
  let state = { ...initialState };
  behaviorSubject.next(initialState);
  return {
    subscribe: (setState) =>
      behaviorSubject.subscribe((value) => setState(value)),
    currentState: () => {
      let ans;
      behaviorSubject.subscribe((value) => {
        ans = value;
      });
      return ans || initialState;
    },
    updateData: (obj = initialState) => {
      state = {
        ...state,
        ...obj
      }
      behaviorSubject.next(state);
    },
  };
};

export default createStore;