"use client";

import { useEffect, useRef } from "react";

export default function BookingForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Form URL
    const formUrl =
      "https://api.leadconnectorhq.com/widget/form/gQ2Wz6ACWftrvd3ocnm9";

    // Create the iframe element
    if (containerRef.current) {
      // Clear previous content
      containerRef.current.innerHTML = "";

      // Create and configure the iframe
      const iframe = document.createElement("iframe");
      iframe.src = formUrl;
      iframe.style.width = "500px";
      iframe.style.height = "620px";
      iframe.style.border = "none";

      // Append the iframe to the container
      containerRef.current.appendChild(iframe);
    }
  }, []);

  return <div ref={containerRef} className="p-4"></div>;
}
