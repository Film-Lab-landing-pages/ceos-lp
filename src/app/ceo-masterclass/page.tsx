import ASolucao from '@/sections/ASolucao'
import QuemNaoEVisto from '@/sections/QuemNaoEVisto'
import Apresentacao from '@/sections/Apresentacao'
import Pacotes from '@/sections/Pacotes'
import Footer from '@/components/Footer'
import Checklist from '@/sections/Checklist'

export default function Home() {
  return (
    <div>
      <Apresentacao />
      <QuemNaoEVisto />
      <Checklist />
      <ASolucao />
      <Pacotes />
      <Footer />
    </div>
  )
}
