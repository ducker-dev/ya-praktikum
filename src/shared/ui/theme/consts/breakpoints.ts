const bp_l = 1440
const bp_m = 1024
const bp_s = 768
const bp_xs = 375

// L screen / wide desktop / 1440 >< ∞
const l_down = `(max-width: ${bp_l - 1}px)` // < 1439
const l_up = `(min-width: ${bp_l}px)` // 1440 >

// M screen / small desktop / 1024 >< 1439
const m_down = `(max-width: ${bp_m - 1}px)` // < 1023
const m_up = `(min-width: ${bp_m}px)` // 1024 >
const m_between = `${m_up} and ${l_down}` // 1024 >< 1439

// S screen / tablet / 768 >< 1023
const s_down = `(max-width: ${bp_s - 1}px)` // < 767
const s_up = `(min-width: ${bp_s}px)` // 768 >
const s_between = `${s_up} and ${m_down}` // 768 >< 1023

// XS screen / phone / 375 >< 767
const xs_down = `(max-width: ${bp_xs - 1}px)` // < 374
const xs_up = `(min-width: ${bp_xs}px)` // 375 >
const xs_between = `${xs_up} and ${s_down}` // 375 >< 767

export const breakpoints = {
  l: {
    container: '120rem',
    indents: '12rem',

    media: {
      down: `@media ${l_down}`,
      up: `@media ${l_up}`,
      between: '',
    },

    screens: {
      down: l_down,
      up: l_up,
      between: '',
    },

    headerHeight: '9.2rem',
    footerHeight: '9.2rem',
  },

  m: {
    container: '96rem',
    indents: '3.2rem',

    media: {
      down: `@media ${m_down}`,
      up: `@media ${m_up}`,
      between: `@media ${m_between}`,
    },

    screens: {
      down: m_down,
      up: m_up,
      between: m_between,
    },

    headerHeight: '9.2rem',
    footerHeight: '9.2rem',
  },

  s: {
    container: '72rem',
    indents: '2.4rem',

    media: {
      down: `@media ${s_down}`,
      up: `@media ${s_up}`,
      between: `@media ${s_between}`,
    },

    screens: {
      down: s_down,
      up: s_up,
      between: s_between,
    },

    headerHeight: '9.2rem',
    footerHeight: '9.2rem',
  },

  xs: {
    container: '100%',
    indents: '1.6rem',

    media: {
      down: `@media ${xs_down}`,
      up: `@media ${xs_up}`,
      between: `@media ${xs_between}`,
    },

    screens: {
      down: xs_down,
      up: xs_up,
      between: xs_between,
    },

    headerHeight: '9.2rem',
    footerHeight: 0,
  },
}
