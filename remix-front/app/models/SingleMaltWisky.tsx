export type SingleMaltWisky = {
  id?: number;
  country_name: string;
  producing_area_name: string;
  age: number;
  label: string;
  edition: string;
  status: number;
  price: number;
};

export type FormSingleMaltWisky = {
  country_id: number;
  field_id: number;
  age: number;
  label: string;
  edition: string;
  status: number;
  price: number;
};

export type PostSingleMaltWisky = {
  field_id: number;
  age: number;
  label: string;
  edition: string;
  status: number;
  price: number;
};

export const SingleMaltWiskyFormTemplate: FormSingleMaltWisky = {
  country_id: 0,
  field_id: 0,
  age: 0,
  label: "",
  edition: "",
  status: 0,
  price: 0,
};
