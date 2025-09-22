import Provider from "@/components/Provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar />
          {children}
          <BackToTop />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
