import styles from './Main.module.styl'
import React, { FC } from 'react'
import { GenerateSection } from '../GenerateSection'
import { ValidateSection } from '../ValidateSection'
import { DocSection } from '../DocSection'
import { InfoSection } from '../InfoSection'

export const Main: FC = () => (
  <main className={styles.main}>
    <GenerateSection />

    <ValidateSection />

    <DocSection />

    <InfoSection />
  </main>
)
