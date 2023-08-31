import { CSSProperties } from 'react'

import { IBaseComponent } from 'shared/types'

export interface IFlexProps extends IBaseComponent {
  flexDirection?: CSSProperties['flexDirection']
  flexWrap?: CSSProperties['flexWrap']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  gap?: CSSProperties['gap']
}
