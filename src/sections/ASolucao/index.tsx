'use client'

import { Card, Title, Grid } from '@/styles/globalStyles'
import * as S from './styles'

const solutions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tellus id massa pretium semper aliquet ac.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tellus id massa pretium semper aliquet ac.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec tellus id massa pretium semper aliquet ac.',
]

const ASolucao = () => {
  return (
    <S.ASolucaoContainer>
      <Grid>
        <Title>A Solução</Title>
        <S.SubtitleWrapper>
          <S.SubtitleMainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            tellus id massa pretium semper aliquet ac metus.
          </S.SubtitleMainText>
          <S.SubtitleSpan>
            In lacinia eros sed nulla dignissim, eu ultricies nisi lacinia.
          </S.SubtitleSpan>
        </S.SubtitleWrapper>

        <Card>
          <S.CardContent>
            {solutions.map((text, index) => (
              <S.CardItem key={index}>
                <S.CardItemText>{text}</S.CardItemText>
                <S.CardItemIcon>
                  <S.Icon />
                  Inserir Icon Aqui
                  <S.Icon />
                </S.CardItemIcon>
              </S.CardItem>
            ))}
          </S.CardContent>
        </Card>
      </Grid>
    </S.ASolucaoContainer>
  )
}

export default ASolucao
