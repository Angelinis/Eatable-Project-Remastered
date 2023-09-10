import { BASE_URI, TOKEN_KEY as tokenKey } from "../../config";

export default async function fetchService(
  endpoint,
  { method, headers, body } = {}
) {
  const token = sessionStorage.getItem(tokenKey);
  const authHeader = 'Bearer ' + token;

  if (token) {
    headers = {
      Authorization: authHeader,
      ...headers,
    };
  }

  if (body) {
    headers = {
      'Content-Type': 'application/json',
      ...headers,
    };
  }

  const config = {
    method: method || (body ? 'POST' : 'GET'),
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(BASE_URI + endpoint, config);

  let data;
  if (!response.ok) {
    if (token && response.status == 401) {
      sessionStorage.removeItem(tokenKey);
      window.location.reload();
    }
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    throw new Error(data.errors);
  }

  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }

  return data;
}