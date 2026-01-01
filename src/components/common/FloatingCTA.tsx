// src/components/common/FloatingCTA.tsx

import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white p-3 shadow-md md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <CallButton size="lg" />
        <WhatsAppButton size="lg" />
      </div>
    </div>
  );
}
