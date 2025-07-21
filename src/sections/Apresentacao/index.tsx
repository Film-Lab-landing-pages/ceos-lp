'use client'

import { Title, Container } from '@/styles/globalStyles'
import * as S from './styles'

const Apresentacao = () => {
  return (
    <S.ApresentacaoSection>
      <S.ApresentacaoContainerWrapper>
        <S.ApresentacaoTitle className="poppins-bold">
          MasterClass Para CEOs
        </S.ApresentacaoTitle>

        <S.ApresentacaoContainer></S.ApresentacaoContainer>
        <S.ApresentacaoText className="poppins-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </S.ApresentacaoText>
      </S.ApresentacaoContainerWrapper>
    </S.ApresentacaoSection>
  )
}

export default Apresentacao
