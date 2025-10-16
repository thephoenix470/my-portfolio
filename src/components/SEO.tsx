import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  const siteName = "Innovative Solutions - TrevaCore";
  const defaultDescription = "TrevaCore - Innovative web solutions, low-code integration, and application care.";
  const baseUrl = "https://www.trevacore.com"

  return (
    <>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="google-site-verification" content="nxNvIKSePTV_8ra7Imap4_rD_xPJA7Wl0-jbdMLWmG8" />
      <link rel="canonical" href={baseUrl} />
    </>
  );
}
