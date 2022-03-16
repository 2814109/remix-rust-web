import { DOMAIN } from "../const";
const headers = {
  "Content-Type": "application/json",
};

export const getFetcher = async (url: string) => {
  const response = await fetch(`${DOMAIN}/${url}`, {
    mode: "cors",
    headers,
  });
  return response.json();
};
export const postFetcher = async (url: string, request_body: {}) => {
  const response = await fetch(`${DOMAIN}/${url}`, {
    method: "post",
    headers,
    body: JSON.stringify(request_body),
  });
  return response.json();
};

export const patchFetcher = async (url: string, request_body: {}) => {
  const response = await fetch(`${DOMAIN}/${url}`, {
    method: "patch",
    headers,
    body: JSON.stringify(request_body),
  });
  return response.json();
};
