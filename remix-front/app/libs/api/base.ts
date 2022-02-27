import { DOMAIN } from "../const";
export const getFetcher = async (url: string) => {
  const response = await fetch(`${DOMAIN}/${url}`, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
