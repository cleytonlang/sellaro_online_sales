"use client";

import { useEffect, useRef } from "react";

const EMBED_CODE = "cmmbh12d7004tpg0pmnh7ny4k";
const IFRAME_ID = `sellaro-iframe-${EMBED_CODE}`;

export function SellaroCheckoutForm() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (
        event.data &&
        event.data.type === "sellaro-resize" &&
        event.data.embedCode === EMBED_CODE
      ) {
        const height = Number(event.data.height);
        if (Number.isFinite(height) && iframeRef.current) {
          iframeRef.current.style.height = `${height}px`;
        }
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      id={IFRAME_ID}
      src="http://localhost:3000/forms/cmmbh12d7004tpg0pmnh7ny4k"
      width="100%"
      height={0}
      frameBorder="0"
      scrolling="no"
      style={{
        border: "none",
        display: "block",
        overflow: "hidden",
        minHeight: "100px",
      }}
      sandbox="allow-scripts allow-forms allow-same-origin"
      allow="camera 'none'; microphone 'none'; geolocation 'none'"
      referrerPolicy="strict-origin"
    />
  );
}

