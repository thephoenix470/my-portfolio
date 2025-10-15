import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  const siteName = "LumaCore";
  const defaultDescription = "LumaCore - Innovative web solutions, low-code integration, and application care.";

  return (
    <>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
    </>
  );
}
