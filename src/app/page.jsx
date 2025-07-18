import Footer from "@/components/Footer";
import SectionClassContent from "@/sections/ClassContent";
import Header from "@/components/Header";
import InscriptionForm from "@/components/InscriptionForm";
import ParaQuem from "@/sections/ParaQuem";

export default function Home() {
  return (
    <div>
      {/*  <InscriptionForm /> */}
      <Header clasname="width-container" />
      <SectionClassContent />
      <ParaQuem clasname="width-container" />

      <Footer />
    </div>
  );
}
