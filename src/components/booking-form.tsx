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
      iframe.style.width = "380px";
      iframe.style.height = "450px";
      iframe.style.border = "none";
      iframe.className =
        "p-2 bg-black/30 rounded-2xl backdrop-blur-xl shadow-2xl overflow-hidden";
      containerRef.current.appendChild(iframe);
    }
  }, []);

  return <div ref={containerRef} className="w-[400px] mx-auto"></div>;
}
