import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

export default function SiteChrome({ children }) {
  return (
    <main>
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </main>
  );
}
