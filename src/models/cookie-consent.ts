export enum CookieConsentKeys {
  NECESSARY = "necessary",
  ANALYTICS = "analytics",
  ADVERTISEMENTS = "advertisements",
}

export type CookieConsent = {
  [key in CookieConsentKeys]: boolean;
};

export const COOKIE_CONSENT_NAME = "CookieConsent";

export const defaultCookieConsent = {
  [CookieConsentKeys.NECESSARY]: true,
  [CookieConsentKeys.ANALYTICS]: false,
  [CookieConsentKeys.ADVERTISEMENTS]: false,
};
