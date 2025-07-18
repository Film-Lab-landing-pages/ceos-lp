'use client'

import React from 'react'
import { Grid } from '@/styles/globalStyles'
import * as S from './styles'
import { Button } from '@/styles/globalStyles'

const LPHome: React.FC = () => {
  return (
    <S.Section>
      <Grid>
        <S.Card>
          <S.CardContent>
            <S.CardHeader className="poppins-bold">
              MASTERCLASS PARA CEOs
            </S.CardHeader>
            <S.CardMainText className="poppins-bold">
              Quem não é visto,
              <br />
              <S.CardSpan className="poppins-bold">não é lembrado!</S.CardSpan>
            </S.CardMainText>
          </S.CardContent>
        </S.Card>
        <S.DescriptionWrapper>
          <S.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            porttitor est ac risus ullamcorper eleifend. Proin in nibh molestie
            mauris dapibus molestie ut ut.
          </S.Description>
        </S.DescriptionWrapper>

        <S.ButtonWrapper>
          <Button size="large" className="poppins-xbold class-content">
            Inscrição
          </Button>
        </S.ButtonWrapper>
      </Grid>
    </S.Section>
  )
}

export default LPHome
