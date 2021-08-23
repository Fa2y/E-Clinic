import { Cookies } from 'react-cookie';

const getUser = (propCookies) => {
  const cookies = propCookies === null ? propCookies : new Cookies();
  const user = cookies.get('user');
  if (user) {
    return typeof user === 'object' ? user : JSON.parse(user);
  }
  return null;
};

const getToken = () => {
  const user = getUser();
  return user?.token;
};

const setUser = (user) => {
  const cookies = new Cookies();
  if (user) cookies.set('user', JSON.stringify(user), { path: '/' });
  else cookies.remove('user', { path: '/' });
};

const extractErrorMsg = (data) => {
  if (typeof data === 'string') return data;

  const msgs = [];
  Object.keys(data).forEach((key) => {
    if (Array.isArray(data[key])) {
      data[key].forEach((error) => {
        msgs.push(`${key} : ${error}`);
      });
    } else {
      msgs.push(`${key} : ${extractErrorMsg(data[key])}`);
    }
  });
  return msgs;
};
/**
 * Checks if user is authenticated
 */
const isUserAuthenticated = () => {
  const user = getUser();
  if (!user) {
    return false;
  }
  const decoded = user.token;
  if (decoded) {
    return true;
  }
  return false;
};

export { getUser, getToken, setUser, extractErrorMsg, isUserAuthenticated };
