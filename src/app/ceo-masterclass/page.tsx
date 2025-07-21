import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ASolucao from "@/sections/ASolucao";
import QuemNaoEVisto from "@/sections/QuemNaoEVisto";
import SairDessa from "@/sections/SairDessa";

export default function Home() {
  return (
    <div>
      <Header />
      <QuemNaoEVisto />
      <SairDessa />
      <ASolucao />
      <Footer />
    </div>
  );
}
