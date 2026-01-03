"use client";

import { useState } from "react";
import EstimatorDrawer from "./EstimatorDrawer";

interface EstimatorTriggerProps {
  prefillServiceId?: string;
  className?: string; // Add this line
}

export default function EstimatorTrigger({ 
  prefillServiceId, 
  className 
}: EstimatorTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setOpen(true)} 
        // We use the className passed from the parent (Navbar)
        className={className || "cta-outline"} 
      >
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