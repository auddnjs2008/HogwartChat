import client from "./client";

interface register {
  id: string;
  name: string;
  password: string;
}

interface login {
  id: string;
  password: string;
}

export const registerUser = (userInfo: register) =>
  client.post("/api/user/register", userInfo);

export const loginUser = (userInfo: login) =>
  client.post("/api/user/login", userInfo);
