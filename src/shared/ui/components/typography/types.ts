import { ElementType } from 'react'

import { IBaseComponent } from 'shared/types'
import { TColorsKeys, TTextsKeys } from 'shared/ui/theme'

export type TTextCustomization = {
  variant?: TTextsKeys
  uppercase?: boolean
  color?: TColorsKeys
  center?: boolean
}

export interface ITypographyProps
  extends IBaseComponent,
    TTextCustomization,
    Omit<
      React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
      >,
      'color'
    > {
  m?: TTextCustomization
  s?: TTextCustomization
  xs?: TTextCustomization
  as?: ElementType
}
