import { CSSProperties } from 'react'

import { IBaseComponent } from 'shared/types'

export interface IFlexProps extends IBaseComponent {
  flexDirection?: CSSProperties['flexDirection']
  flexWrap?: CSSProperties['flexWrap']
  justifyContent?: CSSProperties['justifyContent']
  alignItems?: CSSProperties['alignItems']
  alignSelf?: CSSProperties['alignSelf']
  gap?: CSSProperties['gap']
  margin?: CSSProperties['margin']
  padding?: CSSProperties['padding']
  width?: CSSProperties['width']
}
