import Footer from '@/components/Footer'
import SectionClassContent from '@/sections/ClassContent'
import InscriptionForm from '@/components/InscriptionForm'
import ParaQuem from '@/sections/ParaQuem'
import LPHome from '@/sections/LPHome'
import ASolucao from '@/sections/ASolucao'

export default function Home() {
  return (
    <div>
      <InscriptionForm />
      <LPHome />
      <SectionClassContent />
      <ParaQuem />
      <ASolucao />

      <Footer />
    </div>
  )
}
