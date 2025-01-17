"use client";

import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Switch } from "@heroui/switch";
import { Tooltip } from "@heroui/tooltip";
import HelpCircleIcon from "@/icons/help-circle";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { CookieConsent, CookieConsentKeys } from "@/models/cookie-consent";

export default function CookieConsentBanner() {
  const { visible, consent, acceptAll, reject, save } = useCookieConsent();
  const [preferences, setPreferences] = useState<CookieConsent>(consent);

  const selectCookieConsentPreferences = (
    key: CookieConsentKeys,
    value: boolean
  ) => {
    setPreferences({
      ...preferences,
      [key]: value,
    });
  };

  const saveCookieConsent = () => {
    save(preferences);
  };

  return (
    <Modal
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      hideCloseButton={true}
      shouldBlockScroll={false}
      size="lg"
      placement="bottom"
      backdrop="opaque"
      isOpen={visible}
    >
      <ModalContent>
        <ModalHeader>We use cookies and other technologies.</ModalHeader>
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-0.5">
              <Switch
                size="sm"
                disabled
                isSelected={preferences[CookieConsentKeys.NECESSARY]}
              >
                Necessary
              </Switch>
              <Tooltip content="Necessary cookies required by website">
                <HelpCircleIcon />
              </Tooltip>
            </div>
            <div className="flex items-center gap-0.5">
              <Switch
                size="sm"
                isSelected={preferences[CookieConsentKeys.ANALYTICS]}
                onValueChange={(value) =>
                  selectCookieConsentPreferences(
                    CookieConsentKeys.ANALYTICS,
                    value
                  )
                }
              >
                Analytics
              </Switch>
              <Tooltip content="Optional Analytics cookies for tracking performance">
                <HelpCircleIcon />
              </Tooltip>
            </div>
            <div className="flex items-center gap-0.5">
              <Switch
                size="sm"
                isSelected={preferences[CookieConsentKeys.ADVERTISEMENTS]}
                onValueChange={(value) =>
                  selectCookieConsentPreferences(
                    CookieConsentKeys.ADVERTISEMENTS,
                    value
                  )
                }
              >
                Advertisements
              </Switch>
              <Tooltip content="Optional Advertisements cookies to allow Ads in the website">
                <HelpCircleIcon />
              </Tooltip>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onPress={reject}>
            Reject
          </Button>
          <Button variant="ghost" onPress={saveCookieConsent}>
            Save
          </Button>
          <Button color="primary" onPress={acceptAll}>
            Accept All
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
