'use client'

import React from 'react'
import { Grid, Card, Button } from '@/styles/globalStyles'
import * as S from './styles'
import { EnrollButton } from '../ClassContent/styles'

const LPHome: React.FC = () => {
  return (
    <S.Section>
      <Grid>
        <S.ContentContainer>
          <Card>
            <S.CardContent>
              <S.CardHeader className="poppins-bold">
                {' '}
                MASTERCLASS PARA CEOs
              </S.CardHeader>
              <S.CardMainText className="poppins-bold">
                Quem não é visto,
                <br />
                <S.CardSpan className="poppins-bold">
                  não é lembrado!
                </S.CardSpan>
              </S.CardMainText>
            </S.CardContent>
          </Card>
          <S.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            porttitor est ac risus ullamcorper eleifend. Proin in nibh molestie
            mauris dapibus molestie ut ut.
          </S.Description>
          <EnrollButton size="large" className="poppins-xbold class-content">
            Inscrição
          </EnrollButton>
        </S.ContentContainer>
      </Grid>
    </S.Section>
  )
}

export default LPHome
