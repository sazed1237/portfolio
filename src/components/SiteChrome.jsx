import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

export default function SiteChrome({ children }) {
  return (
    <main className="flex-1 flex flex-col">
      <Header />
      <StairTransition />
      <div className="flex-1">
        <PageTransition>{children}</PageTransition>
      </div>
    </main>
  );
}
