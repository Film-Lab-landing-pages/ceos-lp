import Footer from '@/components/footer'
import SectionClassContent from '@/components/section-class-content'
import Header from '@/components/Header'
import InscriptionForm from '@/components/InscriptionForm'
import ParaQuem from '@/sections/ParaQuem'

export default function Home() {
  return (
    <div>
      <div className="main-container">
        <InscriptionForm />
        <Header />
        <SectionClassContent />
        <ParaQuem />
      </div>
      <Footer />
    </div>
  )
}
