import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InscriptionForm from "@/components/InscriptionForm";
import ParaQuem from "@/sections/ParaQuem";

export default function Home() {
  return (
    <div>
      <div className="main-container">
        <InscriptionForm />
        <Header />
        <ParaQuem />
      </div>
      <Footer />
    </div>
  );
}
