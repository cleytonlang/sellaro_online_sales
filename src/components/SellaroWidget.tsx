"use client";

import { useState } from "react";

const WIDGET_CONFIG = {
  formUrl: "http://localhost:3000/forms/cmkahm5oj0031o40pmm1igckp",
  buttonText: "Fale com um especialista",
  photoUrl:
    "https://sellaro-form.s3.us-east-1.amazonaws.com/77338841-f6ef-4d80-a51c-0af49608fda5-assistente1.png",
};

export function SellaroWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const open = () => {
    setIsOpen(true);
    setIframeLoaded(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Launcher - hidden when modal is open */}
      {!isOpen && (
        <div className="sellaro-widget-launcher">
          <span
            role="button"
            tabIndex={0}
            className="sellaro-widget-label"
            onClick={open}
            onKeyDown={(e) => e.key === "Enter" && open()}
          >
            {WIDGET_CONFIG.buttonText}
          </span>
          <button
            type="button"
            className="sellaro-widget-button"
            onClick={open}
            aria-label="Abrir assistente Sellaro"
          >
            <img
              src={WIDGET_CONFIG.photoUrl}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                display: "block",
              }}
            />
          </button>
        </div>
      )}

      {/* Modal */}
      <div
        className={`sellaro-widget-modal ${isOpen ? "sellaro-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Assistente Sellaro"
      >
        <div className="sellaro-widget-container">
          <button
            type="button"
            className="sellaro-widget-close"
            onClick={close}
            aria-label="Fechar"
          />
          {iframeLoaded && (
            <iframe
              className="sellaro-widget-iframe"
              src={WIDGET_CONFIG.formUrl}
              title="Formulário Sellaro"
            />
          )}
        </div>
      </div>
    </>
  );
}
