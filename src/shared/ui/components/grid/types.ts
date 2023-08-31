import { CSSProperties } from 'react'

import { IBaseComponent } from 'shared/types'

export interface IGridProps extends IBaseComponent {
  gridTemplateColumns?: CSSProperties['gridTemplateColumns']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  gap?: CSSProperties['gap']
}
