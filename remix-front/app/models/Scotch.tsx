export type Scotch = {
  producingArea: string;
  age: number | undefined;
  label: string;
  edition: "limited" | "none limited" | undefined;
  status: string;
  price: number | undefined;
};

export const ScotchTemplate = {
  producingArea: "",
  age: undefined,
  label: "",
  edition: undefined,
  status: "",
  price: undefined,
};
