import { useMemo } from "react";
import { runValidators } from "../utils/validators";

type Validator = (value: string) => string | null;

export function useFieldValidation<T extends object>(
  data: T,
  schema: Partial<Record<keyof T, Validator[]>>,
) {
  const errors = useMemo(() => {
    const result: Partial<Record<keyof T, string>> = {};

    (Object.keys(schema) as Array<keyof T>).forEach((field) => {
      const fns = schema[field];
      if (!fns) return;

      const value = String(data[field] ?? ""); // safely coerce to string
      const error = runValidators(value, fns);

      if (error) result[field] = error;
    });

    return result;
  }, [data, schema]);

  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
}
