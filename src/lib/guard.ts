export const guard = {
  number: (value: unknown): value is number => {
    return typeof value === "number" && !isNaN(value) && isFinite(value);
  },
};
