export type Scotch = {
  producing_area: string;
  age: number | undefined;
  label: string;
  edition: "limited" | "none limited" | undefined;
  status: string;
  price: number | undefined;
};

export const ScotchTemplate = {
  producing_area: "",
  age: undefined,
  label: "",
  edition: undefined,
  status: "",
  price: undefined,
};
