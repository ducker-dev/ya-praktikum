import { SerializedStyles } from '@emotion/react'
import { ReactNode } from 'react'

// enums

// types

// interfaces

export interface IBaseComponent {
  css?: SerializedStyles
  className?: string
  children?: ReactNode
}
