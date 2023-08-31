import { Global, css, useTheme } from '@emotion/react'
import 'normalize.css'

export const AppStyles = () => {
  const { fonts, colors } = useTheme()
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap');

        html {
          font-size: 10px;
        }

        body {
          font-family: ${fonts.montserrat};
          font-size: 1.6rem;
          color: ${colors.secondary_8};
          background: ${colors.slices_back};
        }

        a {
          text-decoration: none;
        }

        button {
          border: none;
          outline: none;
          background-color: unset;
        }

        a,
        button {
          cursor: pointer;
        }

        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
        }

        * {
          scrollbar-width: thin;
          scrollbar-color: #ccd8df #fafafa;
        }

        /* Works on Chrome, Edge, and Safari */
        *::-webkit-scrollbar {
          width: 0.5rem;
          height: 0.5rem;
        }

        *::-webkit-scrollbar-track {
          background-color: #fafafa;
        }

        *::-webkit-scrollbar-thumb {
          background-color: #ccd8df;
          border-radius: 2rem;
        }
      `}
    />
  )
}
