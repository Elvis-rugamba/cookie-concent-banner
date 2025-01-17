import { useEffect, useState } from "react";
import { getCookieValue, setCookieValue } from "@/utils/cookies";
import {
  COOKIE_CONSENT_NAME,
  CookieConsent,
  CookieConsentKeys,
  defaultCookieConsent,
} from "@/models/cookie-consent";

export function useCookieConsent() {
  const [visible, setVisible] = useState(true);
  const [consent, setConsent] = useState<CookieConsent>(defaultCookieConsent);

  useEffect(() => {
    const cookieConsent = getCookieValue(COOKIE_CONSENT_NAME);
    setVisible(cookieConsent === undefined);

    if (cookieConsent) {
      setConsent(JSON.parse(cookieConsent));
    }

    return () => {
      setVisible(false);
    };
  }, []);

  const setCookieConsentConsent = (updatedConsent: CookieConsent) => {
    const newConsent = { ...consent, ...updatedConsent };
    setConsent(newConsent);
    setCookieValue(COOKIE_CONSENT_NAME, JSON.stringify(newConsent));
    setVisible(false);
  };

  const acceptAll = () => {
    setCookieConsentConsent({
      [CookieConsentKeys.NECESSARY]: true,
      [CookieConsentKeys.ANALYTICS]: true,
      [CookieConsentKeys.ADVERTISEMENTS]: true,
    });
  };

  const reject = () => {
    setCookieConsentConsent(defaultCookieConsent);
  };

  const save = (consentPreferences: CookieConsent) => {
    setCookieConsentConsent(consentPreferences);
  };

  return { visible, consent, acceptAll, reject, save };
}
