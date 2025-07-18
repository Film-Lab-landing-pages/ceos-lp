'use client'

import React from 'react'
import { Card, Title, Grid } from '@/styles/globalStyles'
import * as S from './styles'

const ASolucao: React.FC = () => {
  return (
    <S.ASolucaoContainer>
      <Grid>
        <Title>A Solução</Title>
        <S.SubtitleWrapper>
          <S.SubtitleMainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            tellus id massa pretium semper aliquet ac metus.
          </S.SubtitleMainText>
          <S.SubtitleSpan className="poppins-bold">
            In lacinia eros sed nulla dignissim, eu ultricies nisi lacinia.
          </S.SubtitleSpan>
        </S.SubtitleWrapper>
        <Card>
          <S.CardContent>
            <S.CardItem>
              <S.CardItemText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec tellus id massa pretium semper aliquet ac
              </S.CardItemText>
              <S.CardItemIcon>Incluir um icone de estrela</S.CardItemIcon>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec tellus id massa pretium semper aliquet ac
              </S.CardItemText>
              <S.CardItemIcon>Incluir um icone de estrela</S.CardItemIcon>
            </S.CardItem>
            <S.CardItem>
              <S.CardItemText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nec tellus id massa pretium semper aliquet ac
              </S.CardItemText>
              <S.CardItemIcon>Incluir um icone de estrela</S.CardItemIcon>
            </S.CardItem>
          </S.CardContent>
        </Card>
      </Grid>
    </S.ASolucaoContainer>
  )
}

export default ASolucao
