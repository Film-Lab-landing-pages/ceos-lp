import Header from '@/components/Header'
import ASolucao from '@/sections/ASolucao'
import QuemNaoEVisto from '@/sections/QuemNaoEVisto'
import SairDessa from '@/sections/SairDessa'
import Apresentacao from '@/sections/Apresentacao'
import Pacotes from '@/sections/Pacotes'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Apresentacao />
      <QuemNaoEVisto />
      <SairDessa />
      <ASolucao />
      <Pacotes />
      <Footer />
    </div>
  )
}
