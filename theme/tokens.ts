export const theme = {
  light: {
    background: '#F7F4EF',
    text: '#030508',
    textMuted: '#615951',
    primary: '#1C1A19',
    primarySubtle: '#ECE7E0',
  },
  dark: {
    background: '#080808',
    text: '#FFFFFF',
    textMuted: '#94918F',
    primary: '#FFFFFF',
    primarySubtle: '#292624',
  },
} as const;

export const colors = theme.light;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
} as const;

export const radius = {
  md: 12,
  full: 999,
} as const;

export const size = {
  avatar: 112,
  buttonHeight: 52,
} as const;

export const font = {
  regular: 'DMSans-Regular',
  semiBold: 'DMSans-SemiBold',
  bold: 'DMSans-Bold',
} as const;

export const typography = {
  h1: {
    fontFamily: font.bold,
    fontSize: 24,
    lineHeight: 32,
  },
  button: {
    fontFamily: font.semiBold,
    fontSize: 16,
    lineHeight: 20,
  },
  disclaimerTitle: {
    fontFamily: font.semiBold,
    fontSize: 17,
    lineHeight: 24,
  },
  disclaimerBody: {
    fontFamily: font.regular,
    fontSize: 15,
    lineHeight: 22,
  },
} as const;
