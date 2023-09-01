import { SerializedStyles } from '@emotion/react/dist/emotion-react.cjs'
import React from 'react'

import { IBaseComponent } from 'shared/types'

export interface IButtonProps
  extends IBaseComponent,
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  variant?: 'simple_outline' | 'text_empty'
  color?:
    | 'secondary_1'
    | 'secondary_2'
    | 'secondary_6'
    | 'secondary_8'
    | 'accent_1'
    | 'states_error'
    | 'slices_overlay'
    | '-'
  size?: '1' | '2' | '3'
  linkCss?: SerializedStyles
  to?: string
  toExternal?: string
  fitContent?: boolean
}
