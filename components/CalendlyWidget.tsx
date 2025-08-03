"use client";

import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
export default function CalendlyPopupButton() {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById("__next"));
  }, []);

  if (!rootElement) return null;

  return (
    <>
      <div>
        <PopupButton
          url="https://calendly.com/zwstudiohelper"
          pageSettings={{
            backgroundColor: "ffffff",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "00a2ff",
            textColor: "4d5055",
          }}
          rootElement={rootElement}
          text="Book a Meeting"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        />
      </div>
    </>
  );
}
