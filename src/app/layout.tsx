import Provider from "@/components/Provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "LumaCore Portfolio",
  description: "LumaCore - Innovative web solutions, low-code integration, and application care.",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <Provider>
          <Navbar />
          <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content={metadata.viewport} />
            <link rel="icon" href={metadata.icons.icon} />
          </head>
          <main className="flex-grow">{children}</main>
          <BackToTop />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
