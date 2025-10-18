import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  const siteName = "Innovative Solutions - TrevaCore";
  const defaultDescription = "TrevaCore - Innovative web solutions, low-code integration, and application care.";
  const baseUrl = "https://www.trevacore.com/"
  const favicon = "/favicon.ico"

  return (
    <>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="google-site-verification" content="nxNvIKSePTV_8ra7Imap4_rD_xPJA7Wl0-jbdMLWmG8" />
      <link rel="canonical" href={baseUrl}/>
      <link rel="icon" href={favicon} />
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
    </>
  );
}
