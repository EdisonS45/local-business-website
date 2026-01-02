"use client";

import { useState } from "react";
import EstimatorDrawer from "./EstimatorDrawer";

interface EstimatorTriggerProps {
  prefillServiceId?: string;
}

export default function EstimatorTrigger({ prefillServiceId }: EstimatorTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="cta-outline">
        New Quote
      </button>

      <EstimatorDrawer
        open={open}
        onClose={() => setOpen(false)}
        prefillServiceId={prefillServiceId}
      />
    </>
  );
}
