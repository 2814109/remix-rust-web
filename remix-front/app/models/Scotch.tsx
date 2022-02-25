export type Scotch = {
  producingArea: string;
  age: number | undefined;
  label: string;
  edition: "limited" | "none limited" | undefined;
  status: "have" | "had" | "want" | undefined;
  price: number | undefined;
};

export const ScotchTemplate = {
  producingArea: "",
  age: undefined,
  label: "",
  edition: undefined,
  status: undefined,
  price: undefined,
};
