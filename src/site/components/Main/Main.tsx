import React, { FC } from 'react'
import { GenerateSection } from '../GenerateSection'
import { ValidateSection } from '../ValidateSection'
import { InfoSection } from '../InfoSection'

export const Main: FC = () => (
  <main>
    <GenerateSection />

    <ValidateSection />

    <InfoSection />
  </main>
)
