import { useEffect } from "react";

export const useInitStore = (store, setState) => {
  useEffect(() => {
    const subscription = store.subscribe(setState);
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
