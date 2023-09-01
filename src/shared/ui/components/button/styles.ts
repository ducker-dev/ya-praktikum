import styled from '@emotion/styled/macro'

import { IButtonProps } from './types'

export const ButtonBody = styled('div')(props => {
  const {
    theme: { transitions },
  } = props

  return {
    width: '100%',
    display: 'flex',
    transitions: `opacity ${transitions.base}`,
  }
})

export const BLoaderWrapper = styled('div')(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}))

export const Button = styled('button')<Partial<IButtonProps>>(props => {
  const {
    variant,
    color,
    size,
    fitContent,
    disabled,
    theme: { texts, colors, transitions },
  } = props

  return {
    width: fitContent ? 'fit-content' : 'auto',
    position: 'relative',
    display: 'flex',
    transition: `all ${transitions.base}`,

    '&:hover, &:focus': {
      opacity: 0.7,
    },

    '&:active': {
      opacity: 0.5,
    },

    ...(disabled && {
      opacity: 0.3,
      pointerEvents: 'none',
    }),

    ...(variant === 'simple_outline' && {
      ...(color === 'secondary_8' && {
        ...(size === '1' && {
          padding: '1.2rem 2.8rem',
          borderRadius: '1.2rem',
          border: `0.2rem solid ${colors.secondary_8}`,
          color: colors.secondary_8,
          ...texts.t_13_semiBold,

          [`${ButtonBody}`]: {
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.8rem',
          },
        }),
      }),
    }),

    ...(variant === 'text_empty' && {
      [`${ButtonBody}`]: {
        alignItems: 'center',
        gap: '0.8rem',
      },

      ...(color === 'secondary_6' && {
        ...texts.t_13_semiBold,
        color: colors.secondary_6,
      }),

      ...(color === 'secondary_8' && {
        padding: '0.8rem 1.2rem',
        borderRadius: '0.6rem',
        color: colors.secondary_8,
        ...texts.t_13_medium,

        [`${BLoaderWrapper}`]: {
          fill: colors.secondary_8,
        },

        '&:hover, &:focus, &:active': {
          opacity: 1,
        },

        '&:hover, &:focus': {
          backgroundColor: colors.secondary_1,
        },

        '&:active': {
          backgroundColor: colors.secondary_3,
        },
      }),

      ...(color === 'states_error' && {
        ...texts.t_13_semiBold,
        color: colors.states_error,
      }),

      ...(color === 'accent_1' && {
        ...texts.t_13_semiBold,
        color: colors.accent_1,
      }),
    }),
  }
})
