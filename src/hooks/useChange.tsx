import { ChangeEvent, Dispatch, useCallback } from "react";

export const useChange = <
  E extends ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
>(
  hook: [string, Dispatch<React.SetStateAction<string>>]
) => {
  const [state, dispatch] = hook;
  const action = useCallback(
    (e: E) => {
      const value = e.target.value;
      dispatch(value);
    },
    [dispatch]
  );
  return [state, action] as [string, (e: E) => void];
};
