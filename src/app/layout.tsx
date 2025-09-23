import Provider from "@/components/Provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <Provider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <BackToTop />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
