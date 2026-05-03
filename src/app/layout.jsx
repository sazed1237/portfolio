import "../index.css";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sazed Creations",
  description: "Portfolio website for Sazedul Islam, backend software engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>{children}</SiteChrome>
        <Footer />
      </body>
    </html>
  );
}
