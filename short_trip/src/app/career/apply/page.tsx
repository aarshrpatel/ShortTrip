"use client";

import React, { Suspense } from "react";
import Head from "next/head";
import ApplyPageContent from "@/components/ApplyPageContent";

// This component is the "Apply" subpage for the career section.
// It uses React Suspense to lazy-load the interactive application form (ApplyPageContent).
// SEO meta tags are added via the Head component.
export default function ApplyPage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        {/* Title for the apply page */}
        <title>Apply for a Position | Short Trip</title>
        {/* Meta description for search engines */}
        <meta
          name="description"
          content="Fill out our application form to apply for a position at Short Trip and take the first step in building your future with us."
        />
        {/* Additional SEO meta tags can be added here */}
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Suspense boundary for lazy-loading the interactive form */}
      <Suspense fallback={<div>Loading application form...</div>}>
        <ApplyPageContent />
      </Suspense>
    </>
  );
}
