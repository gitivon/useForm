import { useState } from "react";
import { useChange } from "./useChange";

// useForm 系列，返回 [value, setValue, validator]

export function useInput(initialState: string | (() => string)) {
  return useChange(useState(initialState));
}
