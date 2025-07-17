import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ParaQuem from "@/sections/ParaQuem";

export default function Home() {
  return (
    <div>
      <div className="main-container">
        <Header />
        <ParaQuem />
      </div>
      <Footer />
    </div>
  );
}
