import { Cookies } from "react-cookie";

export const getToken = () => {
  const user = getUser();
  return user?.token;
};

export const getUser = (propCookies) => {
  const cookies = propCookies === null ? propCookies : new Cookies();
  const user = cookies.get("user");
  return user ? (typeof user == "object" ? user : JSON.parse(user)) : null;
};

export const setUser = (user) => {
  let cookies = new Cookies();
  if (user) cookies.set("user", JSON.stringify(user), { path: "/" });
  else cookies.remove("user", { path: "/" });
};

