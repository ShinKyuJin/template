import axios from "axios";

const fetcher = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

const user = {
  create: () => fetcher.post("/user", {}),
  update: () => fetcher.put("/user", {}),
  remove: () => fetcher.delete("/user", {}),
};

export const APIS = {
  user,
};
