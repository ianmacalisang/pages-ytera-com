"use client";

import { useEffect, useRef } from "react";

export default function BookingForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const formUrl =
      "https://api.leadconnectorhq.com/widget/form/gQ2Wz6ACWftrvd3ocnm9";

    if (containerRef.current) {
      containerRef.current.innerHTML = "";

      const iframe = document.createElement("iframe");
      iframe.src = formUrl;
      iframe.style.width = "100%";
      iframe.style.height = "620px";
      iframe.style.border = "none";
      containerRef.current.appendChild(iframe);
    }
  }, []);

  return <div ref={containerRef} className="p-4"></div>;
}
