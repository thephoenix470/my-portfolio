import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  const siteName = "TrevaCore";
  const siteFullName = "Innovative Solutions - TrevaCore"
  const defaultDescription = "TrevaCore - Innovative web solutions, low-code integration, and application care.";
  const baseUrl = "https://www.trevacore.com/"
  const favicon = "/favicon.ico"

  return (
    <>
      <title>{title ? `${title} | ${siteFullName}` : siteFullName}</title>
      <meta name="name" content={siteName} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="google-site-verification" content="nxNvIKSePTV_8ra7Imap4_rD_xPJA7Wl0-jbdMLWmG8" />
      <link rel="canonical" href={baseUrl} />
      <link rel="icon" href={favicon} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={`${siteName} / ${favicon}`} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": siteName,
            "url": baseUrl,
            "logo": `${baseUrl}/logo.png`
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "TrevaCore",
            "alternateName": "TrevaCore Solutions",
            "url": "https://www.trevacore.com"
          })
        }}
      />
    </>
  );
}
