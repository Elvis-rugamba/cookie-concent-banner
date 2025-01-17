import Cookies from "js-cookie";

export const getCookieValue = (name: string) => {
  const cookieValue = Cookies.get(name);

  // if the cookieValue is undefined check for the legacy cookie
  if (cookieValue === undefined) {
    return Cookies.get(getLegacyCookieName(name));
  }
  return cookieValue;
};

export const setCookieValue = (name: string, value: string, options?: Cookies.CookieAttributes) => {
   Cookies.set(name, value, options);
};

export const resetCookieValue = (name: string) => {
  Cookies.remove(name);
};

/**
 * Get the legacy cookie name by the regular cookie name
 * @param {string} name of cookie to get
 */
export const getLegacyCookieName = (name: string) => {
  return `${name}-legacy`;
};