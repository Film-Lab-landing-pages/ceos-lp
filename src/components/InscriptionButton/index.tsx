'use client'

import React from 'react'
import { useInscriptionStore } from '@/store/store'
import { Button } from '@/styles/globalStyles'

interface InscriptionButtonProps {
  text?: string
}

const InscriptionButton: React.FC<InscriptionButtonProps> = ({
  text = 'Inscrição',
}) => {
  const { showForm } = useInscriptionStore()
  return (
    <Button onClick={showForm} className="poppins-xbold class-content">
      {text}
    </Button>
  )
}

export default InscriptionButton
