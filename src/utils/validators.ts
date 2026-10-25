type Validator = (value: string) => string | null;

export const validators = {
  required:
    (message = "Medan in diperlukan") =>
    (value: string): string | null =>
      value.trim() === "" ? message : null,

  email:
    (message = "Format email tidak sah") =>
    (value: string): string | null =>
      value.trim() === "" || /\S+@\S+\.\S+/.test(value) ? null : message,

  minLength:
    (min: number, message = `Sekurang-kurangnya ${min} patah perkataan`) =>
    (value: string): string | null =>
      value.trim().length >= min ? null : message,
};

export function runValidators(value: string, fns: Validator[]): string | null {
  for (const fn of fns) {
    const error = fn(value);
    if (error) return error;
  }
  return null;
}
