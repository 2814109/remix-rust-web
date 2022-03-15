export type Liquor = {
  id: number;
  label: string;
  price: number;
  existence_status: string;
  country: string;
  liquor_type: string;
};

export type FormLiquorType = {
  id: number;
  label: string;
  price: number;
  existence_id: number;
  country_id: number;
  liquor_type_id: number;
};

export const FormLiquorTypeTemplate: FormLiquorType = {
  id: 0,
  label: "",
  price: 0,
  existence_id: 0,
  country_id: 0,
  liquor_type_id: 0,
};
