import styles from './Main.module.styl'
import React, { FC } from 'react'
import { GenerateSection } from '../GenerateSection'
import { ValidateSection } from '../ValidateSection'
import { DocSection } from '../DocSection'

export const Main: FC = () => (
  <main className={styles.main}>
    <GenerateSection />

    <ValidateSection />

    <DocSection />
  </main>
)
