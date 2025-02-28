"use client";

import React, { Suspense } from "react";
import ApplyPageContent from "@/components/ApplyPageContent";

export default function ApplyPage() {
  return (
    <Suspense fallback={<div>Loading application form...</div>}>
      <ApplyPageContent />
    </Suspense>
  );
}
